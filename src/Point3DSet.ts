import { Collection, Rotatable3D } from "./types";
import { Point3D } from "./Point3D";

class Point3DSet implements Rotatable3D, Collection<Point3D> {
  private points: Point3D[]; // Array to store Point3D instances
  private n: number; // Number of points currently in the collection

  constructor() {
    this.points = [];
    this.n = 0;
  }

  add(p: Point3D): void {
    if (this.n < 10) {
      this.points.push(p);
      this.n++;
    }
  }

  get(i: number): Point3D {
    if (i < 0 || i >= this.n) {
      throw new Error("Index out of bounds");
    }
    return this.points[i];
  }

  length(): number {
    return this.n;
  }

  empty(): void {
    this.points = [];
  }

  rotateInZ(ang: number): void {
    for (let i = 0; i < this.n; i++) {
      this.points[i].rotateInZ(ang);
    }
  }

  rotateInY(ang: number): void {
    for (let i = 0; i < this.n; i++) {
      this.points[i].rotateInY(ang);
    }
  }

  rotateInX(ang: number): void {
    for (let i = 0; i < this.n; i++) {
      this.points[i].rotateInX(ang);
    }
  }

  // Equality operator alternative
  static equals(a: Point3DSet, b: Point3DSet): boolean {
    if (a.length() !== b.length()) {
      return false;
    }

    for (let i = 0; i < a.length(); i++) {
      if (!Point3D.equals(a.get(i), b.get(i))) {
        return false;
      }
    }

    return true;
  }
}

export { Point3DSet };
