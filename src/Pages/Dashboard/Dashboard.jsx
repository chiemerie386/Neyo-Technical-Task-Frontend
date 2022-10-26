import "./Dashboard.css";
import React, { useRef, useEffect } from "react";
import iconsDoubleCaret1 from "./assets/iconsDoubleCaret1.svg";
import frame99 from "./assets/frame99.svg";
import iconsDoubleCaret from "./assets/iconsDoubleCaret.svg";
import iconsProjectPanel2 from "./assets/iconsProjectPanel2.svg";
import iconsProjectPanel1 from "./assets/iconsProjectPanel1.svg";
import frame515 from "./assets/frame515.svg";
import frame95 from "./assets/frame95.svg";
import vector1252 from "./assets/vector1252.svg";
import iconsProjectPanel from "./assets/iconsProjectPanel.svg";
import frame5151 from "./assets/frame5151.svg";
import rectangle2060 from "./assets/rectangle2060.svg";
import iconsProjectPanel3 from "./assets/iconsProjectPanel3.svg";
import LineEntryContent from "./Lines/LineEntryContent";
import {Stage} from "@inlet/react-pixi"
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
    PIXI.Texture.from('https://res.cloudinary.com/eftd/image/upload/v1663549982/rbiq1gmzikdr6nsguubv.jpg')
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

const Dashboard = () => {
  const ref = useRef(null);
  function handleSketch () {
    app.renderer.plugins.extract.canvas(app.stage).toBlob(function(b){
      var a = document.createElement('a');
      document.body.append(a);
      a.download = "fileName";
      a.href = URL.createObjectURL(b);
      a.click();
      a.remove();
    }, 'image/png');
  }
  useEffect(() => {
    // On first render add app to DOM
    ref.current.appendChild(app.view);
    // Start the PixiJS app
    init()
    app.start();

    return () => {
      // On unload stop the application
      app.stop();
    };
  }, []);
  const propsData = {
    lineEntryContent: {
      progress: "Add new sketch",
      iconsProjectPanel3: iconsProjectPanel3,
    },
  };
  return (
    <div className="canvas">
        <div className="sketch-pad" ref={ref} />
        <div className="container">
        <div className="rectangle-956">
          <img className="frame-95" src={frame95} />
        </div>
        <img className="vector-1252" src={vector1252} />
        <div className="left-div">
        <div className="flex-container-1">
            <span className="sketches">SKETCHES</span>
            <img className="icons-double-caret-1" src={iconsDoubleCaret1} />
          </div>
                    <img className="frame-5151" src={frame5151} />
                    <span className="progress">Sketch 1</span>
          <span className="progress-1">Sketch 2</span>
          <span className="progress-2">Sketch 3</span>
          <button onClick={handleSketch}>
            click
          </button>
        </div>
      </div>
      <div className="flex-container">
        {/* <img className="rectangle-2060" src={rectangle2060} /> */}
        {/* <div class="sketch-pad"> */}
        {/* <Stage></Stage> */}
        
        {/* </div> */}
        <div className="phases-pages-expand">
        fyhgvjh
          <div className="flex-container-1">
            <span className="sketches">SKETCHES</span>
            {/* <img className="icons-double-caret-1" src={iconsDoubleCaret1} /> */}
          </div>
          {/* <img className="frame-5151" src={frame5151} /> */}
          <span className="progress">Sketch 1</span>
          <span className="progress-1">Sketch 2</span>
          <span className="progress-2">Sketch 3</span>
          {/* <LineEntryContent
            className="line-entry-content-instance-1"
            {...propsData.lineEntryContent}
          /> */}
        </div>

      </div>
    </div>
  );
};
export default Dashboard;
