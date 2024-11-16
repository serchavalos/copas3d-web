import { App } from './application';
import { ColeccionRebanada } from './colreb';
import { Coordenada } from './coordenada';
import { Punto3D } from './punto-3d';
import { Rebanada } from './rebanada';

const canvas = document.getElementById('drawingCanvas') as HTMLCanvasElement;
const app = new App(canvas);
const R = new ColeccionRebanada();
const width = canvas.width;
const height = canvas.height;
const ventana = new Coordenada(width, height, -(width/2), -(height/2), width/2, height/2);

ventana.dibuja(app);

function paint() {
  app.clearCanvas();
  ventana.dibuja(app);
  app.assignPenColor('#000');
  R.dibuja(app, ventana);
}

canvas?.addEventListener('click', (e) => {
  const clickX = e.clientX - canvas.offsetLeft;
  const clickY = e.clientY - canvas.offsetTop;
  const x = width/2 - clickX;
  const y = height/2 - clickY;
  R.incluye(new Rebanada(new Punto3D(x, y, 0)));
  paint();
});

document.getElementById('rotate-x')?.addEventListener('click', () => {
  R.rotaEnX(10);
  paint();
});

document.getElementById('rotate-y')?.addEventListener('click', () => {
  R.rotaEnY(10);
  paint();
});


document.getElementById('rotate-z')?.addEventListener('click', () => {
  R.rotaEnZ(10);
  paint();
});

document.getElementById('clearCanvas')?.addEventListener('click', () => {
  app.clearCanvas();
  ventana.dibuja(app);
  R.vacia();
});

