import { Rotatable3D } from "./types";
import { Point3D } from "./Point3D";

class Point3DSet extends Array<Point3D> implements Rotatable3D {
  empty(): void {
    this.length = 0;
  }

  rotateInZ(ang: number): void {
    for (let i = 0; i < this.length; i++) {
      this[i].rotateInZ(ang);
    }
  }

  rotateInY(ang: number): void {
    for (let i = 0; i < this.length; i++) {
      this[i].rotateInY(ang);
    }
  }

  rotateInX(ang: number): void {
    for (let i = 0; i < this.length; i++) {
      this[i].rotateInX(ang);
    }
  }

  // Equality operator alternative
  static equals(a: Point3DSet, b: Point3DSet): boolean {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!Point3D.equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }
}

export { Point3DSet };
