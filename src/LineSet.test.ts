import { LineSet } from "./LineSet";
import { Line } from "./Line";
import { Point3D } from "./Point3D";
import { App } from "./application";
import { Coordinate } from "./Coordinate";

describe("LineSet", () => {
  
  it("adds lines up to the maximum capacity", () => {
    const lineSet = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet.push(line1);
    lineSet.push(line2);

    expect(lineSet.length).toBe(2);
    expect(lineSet[0]).toBe(line1);
    expect(lineSet[1]).toBe(line2);
  });

  it("gets a line by index", () => {
    const lineSet = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet.push(line1);
    lineSet.push(line2);

    expect(lineSet[0]).toBe(line1);
    expect(lineSet[1]).toBe(line2);
  });

  it("empties the line set", () => {
    const lineSet = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet.push(line1);
    lineSet.push(line2);

    expect(lineSet.length).toBe(2);

    lineSet.empty();

    expect(lineSet.length).toBe(0);
  });

  it("correctly compares two equal LineSets", () => {
    const lineSet1 = new LineSet();
    const lineSet2 = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet1.push(line1);
    lineSet1.push(line2);

    lineSet2.push(line1);
    lineSet2.push(line2);

    expect(LineSet.equals(lineSet1, lineSet2)).toBe(true);
  });

  it("gets coordinates", () => {
    const lineSet = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet.push(line1);
    lineSet.push(line2);

    expect(lineSet.getCoordinates()).toEqual([[{"x": 0, "y": 0}, {"x": 1, "y": 1}], [{"x": 1, "y": 1}, {"x": 2, "y": 2}]]);
  });

  it("correctly compares two different LineSets", () => {
    const lineSet1 = new LineSet();
    const lineSet2 = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));
    const line3 = new Line(new Point3D(2, 2, 2), new Point3D(3, 3, 3));

    lineSet1.push(line1);
    lineSet1.push(line2);

    lineSet2.push(line1);
    expect(LineSet.equals(lineSet1, lineSet2)).toBe(false);

    lineSet2.push(line3);

    expect(LineSet.equals(lineSet1, lineSet2)).toBe(false);
  });
});
