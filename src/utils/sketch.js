
import SpritePool from '../Pages/Dashboard/SpritePool';
import BrushGenerator from '../Pages/Dashboard/BrushGenerator';
import * as dat from 'dat.gui';
import * as PIXI from 'pixi.js';



// const gui = new dat.GUI();


const app = new PIXI.Application({
  // width: window.innerWidth*0.7 ,
  // height: window.innerHeight/1.2,
  width:1000,
  height:600,
  backgroundColor: 0xffffff,
});

const drawBuffer = new PIXI.Container();
const renderTexture = PIXI.RenderTexture.create({ width: 1024, height: 1024 });
// const renderTexture = PIXI.RenderTexture.create({ width: 200, height: 200 });

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
  console.log(window.innerHeight, "window.innerHeight", window.innerWidth, " window.innerHeight", app.screen.height)
  const frameSprite = new PIXI.Sprite(
    // PIXI.Texture.from('data:image/jpeg;base64,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')
    // PIXI.Texture.from('https://i.imgur.com/MA56x4i.png')
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
  // console.log(sprite, "sprie", drawBuffer, "draw", app.view)

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


export default {init, app};