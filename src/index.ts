const createComponent = () => {

  const element = document.createElement('div');
  const canvas = document.createElement('canvas');
  element.appendChild(canvas)

  return canvas;
  
}

document.body.appendChild(createComponent());
