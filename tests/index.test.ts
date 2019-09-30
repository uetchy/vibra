import {Rect, animate, render} from '../src';

const container = document.querySelector('#app');

const wrappedAnimate = (args) => animate(args, 1000, 'easeOutQuint');

// serial animation stack
const welcomeAnimation = Rect({
  width: '500px',
  height: '500px',
  color: 'magenta',
}).then(wrappedAnimate({x: 15, y: 15}));

render(welcomeAnimation, container); // will populate objects on svg
