import { Line } from "./Line";
import { App } from "./application";
import { Coordinate } from "./Coordinate";

class LineSet {
  private lines: Line[] = new Array(10); // Fixed-size array for lines
  private n: number = 0; // Number of current lines

  add(linea: Line): void {
    if (this.n < 10) {
      this.lines[this.n] = linea;
      this.n++;
    } else {
      throw new Error("LineSet is full. Cannot add more lines.");
    }
  }

  get(i: number): Line {
    if (i < 0 || i >= this.n) {
      throw new Error("Index out of bounds");
    }
    return this.lines[i];
  }

  private length(): number {
    return this.n;
  }

  empty(): void {
    this.n = 0;
  }

  render(app: App, c: Coordinate): void {
    for (let i = 0; i < this.n; i++) {
      this.lines[i].render(app, c);
    }
  }

  static equals(a: LineSet, b: LineSet): boolean {
    if (a.length() !== b.length()) {
      return false;
    }
    for (let i = 0; i < a.length(); i++) {
      if (!Line.equals(a.get(i), b.get(i))) {
        return false;
      }
    }
    return true;
  }
}

export { LineSet };
