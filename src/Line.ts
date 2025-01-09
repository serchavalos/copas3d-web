import { App } from "./application";
import { Point3D } from "./Point3D";
import { Coordinate } from "./Coordinate";

class Line {
  private a: Point3D;
  private b: Point3D;

  constructor(a?: Point3D, b?: Point3D) {
    this.a = a ?? new Point3D(); // Default to a new Point3D if not provided
    this.b = b ?? new Point3D();
  }

  render(app: App, c: Coordinate): void {
    const ax = c.xWindow(this.a.x());
    const ay = c.yWindow(this.a.y());
    const bx = c.xWindow(this.b.x());
    const by = c.yWindow(this.b.y());

    app.line(ax, ay, bx, by); // Draw the line in the application context
  }

  // Equality comparison
  static equals(uno: Line, dos: Line): boolean {
    return Point3D.equals(uno.a, dos.a) && Point3D.equals(uno.b, dos.b);
  }
}

export { Line };
