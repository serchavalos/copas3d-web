import { Rotatable3D } from "./types";
class Point3D implements Rotatable3D {
  private coorx: number;
  private coory: number;
  private coorz: number;

  constructor(x_ini: number = 0, y_ini: number = 0, z_ini: number = 0) {
    this.coorx = x_ini;
    this.coory = y_ini;
    this.coorz = z_ini;
  }

  // Copy constructor alternative
  static copy(punto: Point3D): Point3D {
    return new Point3D(punto.coorx, punto.coory, punto.coorz);
  }

  x(): number {
    return this.coorx;
  }

  y(): number {
    return this.coory;
  }

  z(): number {
    return this.coorz;
  }

  rotateInZ(ang: number): void {
    const radians = (ang * Math.PI) / 180;
    const newX = this.coorx * Math.cos(radians) - this.coory * Math.sin(radians);
    const newY = this.coorx * Math.sin(radians) + this.coory * Math.cos(radians);
    this.coorx = newX;
    this.coory = newY;
  }

  rotateInY(ang: number): void {
    const radians = (ang * Math.PI) / 180;
    const newX = this.coorx * Math.cos(radians) + this.coorz * Math.sin(radians);
    const newZ = -this.coorx * Math.sin(radians) + this.coorz * Math.cos(radians);
    this.coorx = newX;
    this.coorz = newZ;
  }

  rotateInX(ang: number): void {
    const radians = (ang * Math.PI) / 180;
    const newY = this.coory * Math.cos(radians) - this.coorz * Math.sin(radians);
    const newZ = this.coory * Math.sin(radians) + this.coorz * Math.cos(radians);
    this.coory = newY;
    this.coorz = newZ;
  }

  // Equality operator alternative
  static equals(a: Point3D, b: Point3D): boolean {
    return a.x() === b.x() && a.y() === b.y() && a.z() === b.z();
  }
}

export { Point3D };
