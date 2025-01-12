import { PointCoordinate } from "./types";

class App {
  private ctx: CanvasRenderingContext2D | null;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) {
      throw new Error('Canvas 2D context not supported');
    }
  }

  assignPenColor(color: string): void {
    if (!this.ctx) throw new Error('Canvas 2D context not supported');

    this.ctx.strokeStyle = color;
  }

  line(x1: number, y1: number, x2: number, y2: number): void {
    if (!this.ctx) throw new Error('Canvas 2D context not supported');

    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

  renderSlices(slices: Array<Array<[PointCoordinate, PointCoordinate]>>) {
    slices.forEach((lines) => {
      lines.forEach((line) => {
        const [a, b] = line;
        this.line(a.x, a.y, b.x, b.y); // Draw the line in the application context
      })
    });
  }

  clearCanvas(): void {
    if (!this.ctx) throw new Error('Canvas 2D context not supported');

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}

export { App };
