import { App } from './application';
import { SliceSet } from './SliceSet';
import { Coordinate } from './Coordinate';
import { Point3D } from './Point3D';
import { Slice } from './Slice';

const canvas = document.getElementById('drawingCanvas') as HTMLCanvasElement;
const app = new App(canvas);
const R = new SliceSet();
const width = canvas.width;
const height = canvas.height;
const window = new Coordinate(width, height, -(width/2), -(height/2), width/2, height/2);
let drawingState: { active: boolean; lastYCoord: number | null } = { active: false, lastYCoord: null };

window.render(app);

function paint() {
  app.clearCanvas();
  window.render(app);
  app.assignPenColor('#000');
  const slicesByCoordinates = window.translateCoordinates(R.getCoordinates());
  app.renderSlices(slicesByCoordinates);
}

function paintSlice(clientX: number, clientY: number) {
  const clickX = clientX - canvas.offsetLeft;
  const clickY = clientY - canvas.offsetTop;
  const x = width/2 - clickX;
  const y = height/2 - clickY;
  R.push(new Slice(new Point3D(x, y, 0)));
  paint();
}

canvas?.addEventListener('mousedown', ({ clientY }) => {
  drawingState = { active: true, lastYCoord: clientY };
});

canvas?.addEventListener('mouseup', ({ clientX, clientY }) => {
  if (drawingState.lastYCoord !== null) {
    paintSlice(clientX, clientY);
  }
  drawingState = { active: false, lastYCoord: null };
});

canvas?.addEventListener('mousemove', ({ clientX, clientY}) => {
  if (!drawingState.active || drawingState.lastYCoord === null) return;

  if (Math.abs(drawingState.lastYCoord - clientY) > 5) {
    paintSlice(clientX, clientY);
    drawingState.lastYCoord = clientY;
  }
});

document.getElementById('rotate-x')?.addEventListener('click', () => {
  R.rotateInX(10);
  paint();
});

document.getElementById('rotate-y')?.addEventListener('click', () => {
  R.rotateInY(10);
  paint();
});


document.getElementById('rotate-z')?.addEventListener('click', () => {
  R.rotateInZ(10);
  paint();
});

document.getElementById('clearCanvas')?.addEventListener('click', () => {
  app.clearCanvas();
  window.render(app);
  R.empty();
});
