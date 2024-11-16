import { App } from "./application";

class Coordenada {
  private x0: number;
  private x1: number;
  private x2: number;
  private y0: number;
  private y1: number;
  private y2: number;
  private anchoVentana: number;
  private largoVentana: number;

  constructor(
    anchoVentana: number,
    largoVentana: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) {
    this.anchoVentana = anchoVentana;
    this.largoVentana = largoVentana;
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;

    this.x0 = (-this.anchoVentana / (this.x2 - this.x1)) * this.x1;
    this.y0 = (-this.largoVentana / (this.y2 - this.y1)) * this.y1;
  }

  xInicial(): number {
    return this.x1;
  }

  yInicial(): number {
    return this.y1;
  }

  xFinal(): number {
    return this.x2;
  }

  yFinal(): number {
    return this.y2;
  }

  xVentana(x: number): number {
    const temp = (x * this.anchoVentana) / (this.x2 - this.x1) + this.x0;
    return temp > 0 ? Math.ceil(temp) : Math.floor(temp);
  }

  yVentana(y: number): number {
    const temp = (-y * this.largoVentana) / (this.y2 - this.y1) + this.y0;
    return temp > 0 ? Math.ceil(temp) : Math.floor(temp);
  }

  xReal(x: number): number {
    return ((x - this.x0) * (this.x2 - this.x1)) / this.anchoVentana;
  }

  yReal(y: number): number {
    return -(((y - this.y0) * (this.x2 - this.x1)) / this.largoVentana);
  }

  dibuja(app: App): void {
    const tempX = Math.ceil(this.x0);
    const tempY = Math.ceil(this.y0);

    app.assignPenColor("rgb(0,0,0)"); // Placeholder for pen color assignment
    app.line(0, tempY, this.anchoVentana, tempY); // Draw horizontal line
    app.line(tempX, 0, tempX, this.largoVentana); // Draw vertical line
  }
}

export { Coordenada };
