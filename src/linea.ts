import { App } from "./application";
import { Punto3D } from "./punto-3d";
import { Coordenada } from "./coordenada";

class Linea {
  private a: Punto3D;
  private b: Punto3D;

  constructor(a?: Punto3D, b?: Punto3D) {
    this.a = a ?? new Punto3D(); // Default to a new Punto3D if not provided
    this.b = b ?? new Punto3D();
  }

  dibuja(app: App, c: Coordenada): void {
    const ax = c.xVentana(this.a.x());
    const ay = c.yVentana(this.a.y());
    const bx = c.xVentana(this.b.x());
    const by = c.yVentana(this.b.y());

    app.line(ax, ay, bx, by); // Draw the line in the application context
  }

  // Operator-like assignment method
  asignar(linea: Linea): void {
    this.a = linea.a;
    this.b = linea.b;
  }

  // Equality comparison
  static equals(uno: Linea, dos: Linea): boolean {
    return Punto3D.equals(uno.a, dos.a) && Punto3D.equals(uno.b, dos.b);
  }
}

export { Linea };
