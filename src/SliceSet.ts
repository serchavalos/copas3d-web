import { Slice } from "./Slice";
import { PointCoordinate, Rotatable3D } from "./types";

class SliceSet extends Array<Slice> implements Rotatable3D {
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

  getCoordinates(): Array<Array<[PointCoordinate, PointCoordinate]>> {
    const slices = []

    for (let i = 0; i < this.length; i++) {
      slices.push(this[i].getCoordinates());
    }

    return slices;
  }
}

export { SliceSet };
