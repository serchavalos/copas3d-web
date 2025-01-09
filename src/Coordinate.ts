import { App } from "./application";

class Coordinate {
  private x0: number;
  private x1: number;
  private x2: number;
  private y0: number;
  private y1: number;
  private y2: number;
  private windowWidth: number;
  private windowLength: number;

  constructor(
    windowWidth: number,
    windowLength: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) {
    this.windowWidth = windowWidth;
    this.windowLength = windowLength;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;

    this.x0 = (-this.windowWidth / (this.x2 - this.x1)) * this.x1;
    this.y0 = (-this.windowLength / (this.y2 - this.y1)) * this.y1;
  }

  xWindow(x: number): number {
    const temp = (x * this.windowWidth) / (this.x2 - this.x1) + this.x0;
    return temp > 0 ? Math.ceil(temp) : Math.floor(temp);
  }

  yWindow(y: number): number {
    const temp = (-y * this.windowLength) / (this.y2 - this.y1) + this.y0;
    return temp > 0 ? Math.ceil(temp) : Math.floor(temp);
  }

  xReal(x: number): number {
    return ((x - this.x0) * (this.x2 - this.x1)) / this.windowWidth;
  }

  yReal(y: number): number {
    return -(((y - this.y0) * (this.x2 - this.x1)) / this.windowLength);
  }

  render(app: App): void {
    const tempX = Math.ceil(this.x0);
    const tempY = Math.ceil(this.y0);

    app.assignPenColor("rgb(0,0,0)"); // Placeholder for pen color assignment
    app.line(0, tempY, this.windowWidth, tempY); // Draw horizontal line
    app.line(tempX, 0, tempX, this.windowLength); // Draw vertical line
  }
}

export { Coordinate };
