import { Slice } from "./Slice";
import { App } from "./application";
import { Coordinate } from "./Coordinate";
import { Collection, Rotatable3D } from "./types";

class SliceSet implements Rotatable3D, Collection<Slice> {
  private slices: Slice[] = [];

  add(rebanada: Slice): void {
    this.slices.push(rebanada);
  }

  get(i: number): Slice {
    if (i < 0 || i >= this.length()) {
      throw new Error("Index out of bounds");
    }
    return this.slices[i];
  }

  length(): number {
    return this.slices.length;
  }

  empty(): void {
    this.slices = [];
  }

  rotateInZ(ang: number): void {
    for (let i = 0; i < this.slices.length; i++) {
      this.slices[i].rotateInZ(ang);
    }
  }

  rotateInY(ang: number): void {
    for (let i = 0; i < this.slices.length; i++) {
      this.slices[i].rotateInY(ang);
    }
  }

  rotateInX(ang: number): void {
    for (let i = 0; i < this.slices.length; i++) {
      this.slices[i].rotateInX(ang);
    }
  }

  render(app: App, c: Coordinate): void {
    for (let i = 0; i < this.slices.length; i++) {
      this.slices[i].render(app, c);
    }
  }
}

export { SliceSet };
