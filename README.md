# vibjs/vib

```js
import Vibra, {animate, Rect} from 'vibra';

const anim2 = Rect({x: 50, y: 50, width: 100, height: 100, opacity: 0.0})
  .then(animate({opacity: 1.0}))
  .then(loop());

Rect({x: 50, y: 50, width: 100, height: 100})
  .then(animate({x: 100, y: 100}, 'easeOut'))
  .then(animate({x: 50, y: 50}, 'easeOut'))
  .then(unmount())
  .then(anim2);

render(mainAnimation);
```

```json
[
  {
    "op": "create",
    "id": "rect",
    "args": {"x": 50, "y": 50, "width": 100, "height": 100}
  },
  {
    "op": "move",
    "id": "rect",
    "duration": 1000,
    "timing": "easeOut",
    "args": {"x": 50, "y": 50, "width": 100, "height": 100}
  }
]
```
