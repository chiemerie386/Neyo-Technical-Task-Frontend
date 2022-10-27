
import SpritePool from './SpritePool';
import BrushGenerator from './BrushGenerator';
import * as dat from 'dat.gui';
import * as PIXI from 'pixi.js';



// const gui = new dat.GUI();

const guiParams = {
  brushSize: 4,
  // brushColor: 0x2ecc71,
  brushColor: "0xcccccc",
  brushSmoothing: 0.2,
  useEraser: false,
};

const app = new PIXI.Application({
  width: window.innerWidth ,
  height: window.innerHeight,
  backgroundColor: 0xffffff,
});

const drawBuffer = new PIXI.Container();
const renderTexture = PIXI.RenderTexture.create({ width: 1024, height: 1024 });

const spritePool = new SpritePool();
const brushGenerator = new BrushGenerator(app.renderer);
let brushTexture = null;

async function init() {
  const frameSprite = new PIXI.Sprite(
    PIXI.Texture.from('https://i.imgur.com/MA56x4i.png')
  );
  frameSprite.anchor.set(0.5);
  frameSprite.width = app.screen.height / 2 + 2;
  frameSprite.height = app.screen.height / 2 + 2;
  frameSprite.position.set(app.screen.width / 2, app.screen.height / 2);
  app.stage.addChild(frameSprite);

  const sprite = new PIXI.Sprite(renderTexture);
  sprite.anchor.set(0.5); 
  sprite.width = app.screen.height/2;
  sprite.height = app.screen.height / 2;
  sprite.position.set(app.screen.width / 2, app.screen.height / 2);
  sprite.interactive = true;
  app.stage.addChild(sprite);
  updateBrush();

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
      drawPointLine(lastPosition, position);
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

  // gui
  //   .add(guiParams, 'brushSize', 1, 256)
  //   .name('Brush size')
  //   .onChange(() => updateBrush());
  // gui
  //   .addColor(guiParams, 'brushColor')
  //   .name('Brush color')
  //   .onChange(() => updateBrush());
  // gui
  //   .add(guiParams, 'brushSmoothing', 0.1, 1)
  //   .name('Brush smoothing')
  //   .onChange(() => updateBrush());
  // gui
  //   .add(guiParams, 'useEraser')
  //   .name('Use eraser')
  //   .onChange(() => updateBrush());
}

function drawPoint(x, y) {
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
  console.log(sprite, "sprie", drawBuffer, "draw", app.view)

  drawBuffer.addChild(sprite);
}

function drawPointLine(oldPos, newPos) {
  const delta = {
    x: oldPos.x - newPos.x,
    y: oldPos.y - newPos.y,
  };
  const deltaLength = Math.sqrt(delta.x ** 2 + delta.y ** 2);

  drawPoint(newPos.x, newPos.y);

  if (deltaLength >= guiParams.brushSize / 8) {
    const additionalPoints = Math.ceil(deltaLength / (guiParams.brushSize / 8));

    for (let i = 1; i < additionalPoints; i++) {
      const pos = {
        x: newPos.x + delta.x * (i / additionalPoints),
        y: newPos.y + delta.y * (i / additionalPoints),
      };

      drawPoint(pos.x, pos.y);
    }
  }
}

function updateBrush() {
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