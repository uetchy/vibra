# Vibra spec

## Simple animation

```js
import Vibra, {compose, render} from '@vib/vib';

// declarative style
document.addEventListener('click', ({pageX, pageY}) => {
  // declare rect
  const rect = new Vib.Rect({
    width: '30px',
    height: '30px',
    fill: 'magenta',
  })
    .move({
      origin: [0, 10],
    })
    .move({
      origin: [0, 10],
    });

  // declare circle
  const circle = new Vib.Circle({
    scale: [30, 30],
  });
  circle
    .move({
      origin: [0, 10],
    })
    .move({
      origin: [0, 10],
    });

  // declare animation set
  // 1. show rect
  // 2. show circle
  // 3. show rect and circle simultaneously
  const clickAnimation = compose(
    rect,
    circle,
    Promise.all([rect, circle]),
    Promise.race([rect, circle]),
  ).modify({x: pageX, y: pageY});

  // play animation
  render(animation, document.querySelector('#app'));
});

// assertive style
document.addEventListener('click', ({pageX, pageY}) => {
  render(
    compose([
      new Vib.Rect({width: '10px', height: '10px'}).move({
        x: (prevX) => x + 10,
        y: (prevY) => y + 10,
      }),
      Promise.all([
        new Vib.Rect({width: '10px', height: '10px'}).move({
          x: (prevX) => x + 10,
          y: (prevY) => y + 10,
        }),
        new Vib.Rect({width: '10px', height: '10px'}).move({
          x: (prevX) => x - 10,
          y: (prevY) => y - 10,
        }),
      ]),
    ]),
    document.querySelector('#app'),
  );
});
```

```js
class Rect() {
  constructor(params){

    return new Promise((resolve, reject) => {

    })
  }
}
```
