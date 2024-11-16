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

  clearCanvas(): void {
    if (!this.ctx) throw new Error('Canvas 2D context not supported');

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}

export { App };
