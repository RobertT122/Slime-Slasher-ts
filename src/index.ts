
interface GameElements {
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  container:HTMLDivElement;
}

function buildHTML ():GameElements {
  const container = document.createElement('div');
  container.classList.add("game-container")
  const canvas = document.createElement('canvas');
  container.appendChild(canvas)
  document.body.appendChild(container);
  return {ctx:canvas.getContext("2d"), canvas, container};
}

function createComponent (): void {
  
  const {ctx, canvas, container} = buildHTML();
  

  // step one:
    // Draw a single frame of the slime
  // step two: 
    // Redraw the frame of the slime at an interval
  // Once Canvas is working properly add its context to an instance of a game object that will do the same thing;
}



window.addEventListener("DOMContentLoaded", createComponent)
