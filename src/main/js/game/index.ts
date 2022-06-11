// Imports
import { Renderer } from './gameEngine/windowManager/renderer';
import { TextureLoader } from './gameEngine/loadManager/textureLoader';
import { Sprite } from './gameEngine/objectManager/sprite';
import { Texture } from './gameEngine/objectManager/texture';
import { Vector2f } from './gameEngine/math/vector';
import { Tilemap } from './gameEngine/objectManager/tilemap';
import { Input } from './gameEngine/inputManager/input';
import { getRandomInt, sleep } from './gameEngine/utils/utils';
import * as PIXI from 'pixi.js'
import { AnimatedSprite } from './gameEngine/objectManager/animatedSprite';
import { CollisionBox } from './gameEngine/objectManager/collisionBox';

let renderer = new Renderer(0x476930, 0, 300);


// Debugging purpose
CollisionBox.showBounds(false);
// ------------------

let input = new Input(renderer);

let textureLoader = new TextureLoader();

let centerX = renderer.width / 2;
let centerY = renderer.height / 2;

renderer.gameLoop(mainGameLoop);

function mainGameLoop(delta : number) : void {

  interactiveMap(delta);
}


let lastPos = new Vector2f(0, 0);
/**
 * Move across map with right click
 * @param delta deltaTime from mainGameLoop
 */
function interactiveMap(delta : number) : void {
  // Hold right to move map
  let currentPos = input.getMousePos();
  if (input.getButtonDown(2)) {
    let deltaPos = new Vector2f((currentPos.x - lastPos.x) * delta, (currentPos.y - lastPos.y) * delta);
    renderer.moveStage(deltaPos);
  }
  lastPos = currentPos;
  // ----------------------
  // Scroll to zoom in/out
  if (input.getWheelDirection()) {
    renderer.scaleStage(new Vector2f(-input.getWheelDirection() / Math.abs(input.getWheelDirection() / 0.01)));
  }
  // ---------------------
}
