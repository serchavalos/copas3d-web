import { Line } from "./Line";
import { PointCoordinate } from "./types";

class LineSet extends Array<Line> {
  empty(): void {
    this.length = 0;
  }

  getCoordinates(): Array<[PointCoordinate, PointCoordinate]> {
    const pointCoordinates = [];

    for (let i = 0; i < this.length; i++) {
      pointCoordinates.push(this[i].getCoordinates());
    }

    return pointCoordinates;
  }


  static equals(a: LineSet, b: LineSet): boolean {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!Line.equals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}

export { LineSet };
