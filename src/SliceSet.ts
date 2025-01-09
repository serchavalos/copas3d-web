import { Slice } from "./Slice";
import { App } from "./application";
import { Coordinate } from "./Coordinate";

class SliceSet {
  slices: Slice[] = [];

  constructor() {}

  add(rebanada: Slice): void {
    this.slices.push(rebanada);
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
