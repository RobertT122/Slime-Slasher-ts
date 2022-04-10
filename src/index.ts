import {spritePath} from './scripts/helpers'

interface GameElements {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  container:HTMLDivElement;
}

function buildHTML ():GameElements {
  const container = document.createElement('div');
  container.classList.add("game-container");
  container.style.width = "100vw";
  container.style.height = "100vh";
  const canvas = document.createElement('canvas');
  container.appendChild(canvas)
  document.body.appendChild(container);
  return {ctx:canvas.getContext("2d"), canvas, container};
}

function createComponent (): void {
  
  const {ctx, canvas, container} = buildHTML();
  const image = new Image()
  // this does not seem like the proper way to import this image url...
  image.src = spritePath('RedSlime-Sheet');

  image.onload = () => ctx.drawImage(image, 0,0);
  
  // step one:
    // Draw a single frame of the slime
  // step two: 
    // Redraw the frame of the slime at an interval
  // Once Canvas is working properly add its context to an instance of a game object that will do the same thing;
}



window.addEventListener("DOMContentLoaded", createComponent)
