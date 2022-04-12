import {spritePath} from './scripts/helpers'

const css = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

@media (min-aspect-ratio: 5/8) and (max-height: 1080px){
  #canvas {
    width:100%;
    max-width: 600px;
  }
}

@media (min-aspect-ratio: 5/8) and (min-height: 1080px){
  #canvas {
    width: 100%;
    max-width: 800px;
  }
}

@media (max-aspect-ratio: 5/8){
  #canvas {
    width: 100%;
    height: 100%
  }
}

#game-box{
  display: flex;
  justify-content: center;
}

.grey-background{
  background-color: lightgrey;
}
`;

interface GameElements {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  container:HTMLDivElement;
}

function buildHTML ():GameElements {
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.id = "game-box";
  document.body.appendChild(container);

  const canvas = document.createElement('canvas');
  canvas.id = "canvas"
  canvas.width=800;
  canvas.height=1420;
  container.appendChild(canvas)

  return {ctx:canvas.getContext("2d"), canvas, container};
}

function createComponent (): void {
  
  const {ctx, canvas, container} = buildHTML();
  const image = new Image()
  // this does not seem like the proper way to import this image url...
  image.src = spritePath('RedSlime-Sheet');

  image.onload = () => ctx.drawImage(image, 0,0);
  
  // step two: 
    // Redraw the frame of the slime at an interval
  // Once Canvas is working properly add its context to an instance of a game object that will do the same thing;
}



window.addEventListener("DOMContentLoaded", createComponent)
