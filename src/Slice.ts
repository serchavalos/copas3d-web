import { LineSet } from "./LineSet";

import { Line } from "./Line";
import { Point3D } from "./Point3D";
import { Point3DSet } from "./Point3DSet";
import { PointCoordinate, Rotatable3D } from "./types";

class Slice implements Rotatable3D {
  private P: Point3DSet = new Point3DSet();
  private L: LineSet = new LineSet();

  constructor(pinicial?: Point3D) {
    if (pinicial) {
      for (let i = 0; i < 360; i += 12) {
        const aux = Point3D.copy(pinicial);
        aux.rotateInY(i);
        this.P.push(aux);
      }
      for (let i = 0; i < this.P.length - 1; i++) {
        this.L.push(new Line(this.P[i], this.P[i + 1]));
      }
      this.L.push(
        new Line(
          this.P[this.P.length - 1],
          this.P[0]
        )
      );
    }
  }

  rotateInZ(ang: number): void {
    this.P.rotateInZ(ang);
    this.regenerateLines();
  }

  rotateInY(ang: number): void {
    this.P.rotateInY(ang);
    this.regenerateLines();
  }

  rotateInX(ang: number): void {
    this.P.rotateInX(ang);
    this.regenerateLines();
  }

  getCoordinates(): Array<[PointCoordinate, PointCoordinate]> {
    return this.L.getCoordinates();
  }

  private regenerateLines(): void {
    this.L.empty();
    for (let i = 0; i < this.P.length - 1; i++) {
      this.L.push(new Line(this.P[i], this.P[i + 1]));
    }
    this.L.push(
      new Line(
        this.P[this.P.length - 1],
        this.P[0]
      )
    );
  }

  static equals(a: Slice, b: Slice): boolean {
    return (
      Point3DSet.equals(a.P, b.P) && LineSet.equals(a.L, b.L)
    );
  }
}

export { Slice };
