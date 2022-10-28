
import SpritePool from './SpritePool';
import BrushGenerator from './BrushGenerator';
import * as PIXI from 'pixi.js';


const app = new PIXI.Application({
  width:1000,
  height:600,
  backgroundColor: 0xffffff,
});

const drawBuffer = new PIXI.Container();
const renderTexture = PIXI.RenderTexture.create({ width: 1024, height: 1024 });

const spritePool = new SpritePool();
const brushGenerator = new BrushGenerator(app.renderer);
let brushTexture = null;

async function init(sketchBody, userColour) {
userColour = userColour.replace('#', "")

const guiParams = {
  brushSize: 4,
  // brushColor: 0x2ecc71,
  brushColor: `0x${userColour}`,
  brushSmoothing: 0.2,
  useEraser: false,
};
  const frameSprite = new PIXI.Sprite(
    PIXI.Texture.from(sketchBody || 'https://res.cloudinary.com/eftd/image/upload/v1666886918/download-11_bnqxdf.jpg')
  )
  frameSprite.anchor.set(0.5);
  frameSprite.width = app.screen.width*2  + 2;
  frameSprite.height = app.screen.height*2 + 2;
  frameSprite.position.set(app.screen.width / 5, app.screen.height / 5);
  app.stage.addChild(frameSprite);

  const sprite = new PIXI.Sprite(renderTexture);
  sprite.anchor.set(0.5); 
  sprite.width = app.screen.width*1;
  sprite.height = app.screen.height*1;
  sprite.position.set(app.screen.width / 2, app.screen.height / 2);
  sprite.interactive = true;
  app.stage.addChild(sprite);
  updateBrush(guiParams);

  let drawingStarted = false;
  let lastPosition = null;

  const onDown = (e) => {
    const position = sprite.toLocal(e.data.global);
    position.x += 512;
    position.y += 512;

    lastPosition = position;
    drawingStarted = true;
  };

  const onMove = (e) => {
    const position = sprite.toLocal(e.data.global);
    position.x += 512;
    position.y += 512;

    if (drawingStarted) {
      drawPointLine(lastPosition, position, guiParams);
    }

    lastPosition = position;
  };
  const onUp = (e) => {
    drawingStarted = false;
    
  };

  sprite.on('mousedown', onDown);
  sprite.on('touchstart', onDown);
  sprite.on('mousemove', onMove);
  sprite.on('touchmove', onMove);
  sprite.on('mouseup', onUp);
  sprite.on('touchend', onUp);

  app.ticker.add(() => {
    renderPoints();
  });

}

function drawPoint(x, y, guiParams) {
  const sprite = spritePool.get();
  sprite.x = x;
  sprite.y = y;
  sprite.texture = brushTexture;

  if (guiParams.useEraser) {
    sprite.filter = new PIXI.filters.AlphaFilter();
    sprite.blendMode = PIXI.BLEND_MODES.ERASE;
  } else {
    sprite.blendMode = PIXI.BLEND_MODES.NORMAL;
  }

  drawBuffer.addChild(sprite);
}

function drawPointLine(oldPos, newPos, guiParams) {
  const delta = {
    x: oldPos.x - newPos.x,
    y: oldPos.y - newPos.y,
  };
  const deltaLength = Math.sqrt(delta.x ** 2 + delta.y ** 2);

  drawPoint(newPos.x, newPos.y, guiParams);

  if (deltaLength >= guiParams.brushSize / 8) {
    const additionalPoints = Math.ceil(deltaLength / (guiParams.brushSize / 8));

    for (let i = 1; i < additionalPoints; i++) {
      const pos = {
        x: newPos.x + delta.x * (i / additionalPoints),
        y: newPos.y + delta.y * (i / additionalPoints),
      };

      drawPoint(pos.x, pos.y, guiParams);
    }
  }
}

function updateBrush(guiParams) {
  brushTexture = brushGenerator.get(
    guiParams.brushSize,
    guiParams.brushColor,
    guiParams.brushSmoothing,
    guiParams.useEraser
  );
}

function renderPoints() {
  app.renderer.render(drawBuffer, renderTexture, false);

  drawBuffer.children = [];
  spritePool.reset();
}
const sketch = {init, app}
export default sketch;