import { App } from "./application";
import { Coordinate } from "./Coordinate";
import { LineSet } from "./LineSet";

import { Line } from "./Line";
import { Point3D } from "./Point3D";
import { Point3DSet } from "./Point3DSet";

class Slice {
  private P: Point3DSet = new Point3DSet();
  private L: LineSet = new LineSet();

  constructor(pinicial?: Point3D) {
    if (pinicial) {
      for (let i = 0; i < 360; i += 36) {
        const aux = Point3D.copy(pinicial);
        aux.rotateInY(i);
        this.P.add(aux);
      }
      for (let i = 0; i < this.P.length() - 1; i++) {
        this.L.add(new Line(this.P.get(i), this.P.get(i + 1)));
      }
      this.L.add(
        new Line(
          this.P.get(this.P.length() - 1),
          this.P.get(0)
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

  render(app: App, c: Coordinate): void {
    this.L.render(app, c);
  }

  private regenerateLines(): void {
    this.L.empty();
    for (let i = 0; i < this.P.length() - 1; i++) {
      this.L.add(new Line(this.P.get(i), this.P.get(i + 1)));
    }
    this.L.add(
      new Line(
        this.P.get(this.P.length() - 1),
        this.P.get(0)
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
