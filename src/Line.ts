import { App } from "./application";
import { Point3D } from "./Point3D";
import { PointCoordinate } from "./types";

class Line {
  private a: Point3D;
  private b: Point3D;

  constructor(a?: Point3D, b?: Point3D) {
    this.a = a ?? new Point3D(); // Default to a new Point3D if not provided
    this.b = b ?? new Point3D();
  }

  getCoordinates(): [ PointCoordinate, PointCoordinate ] {
    return [ { x: this.a.x(), y: this.a.y()}, {x: this.b.x(), y: this.b.y() }];
  }


  // Equality comparison
  static equals(uno: Line, dos: Line): boolean {
    return Point3D.equals(uno.a, dos.a) && Point3D.equals(uno.b, dos.b);
  }
}

export { Line };
