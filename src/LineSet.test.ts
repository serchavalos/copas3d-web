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

    lineSet.add(line1);
    lineSet.add(line2);

    expect(lineSet.length()).toBe(2);
    expect(lineSet.get(0)).toBe(line1);
    expect(lineSet.get(1)).toBe(line2);
  });

  it("throws an error when adding more than 10 lines", () => {
    const lineSet = new LineSet();
    const line = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));

    // Adding 10 lines
    for (let i = 0; i < 10; i++) {
      lineSet.add(line);
    }

    expect(() => lineSet.add(line)).toThrowError("LineSet is full. Cannot add more lines.");
  });

  it("gets a line by index", () => {
    const lineSet = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet.add(line1);
    lineSet.add(line2);

    expect(lineSet.get(0)).toBe(line1);
    expect(lineSet.get(1)).toBe(line2);
  });

  it("throws an error when trying to get a line with an invalid index", () => {
    const lineSet = new LineSet();
    const line = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));

    lineSet.add(line);

    expect(() => lineSet.get(-1)).toThrowError("Index out of bounds");
    expect(() => lineSet.get(1)).toThrowError("Index out of bounds");
  });

  it("empties the line set", () => {
    const lineSet = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet.add(line1);
    lineSet.add(line2);

    expect(lineSet.length()).toBe(2);

    lineSet.empty();

    expect(lineSet.length()).toBe(0);
  });

  it("renders all lines correctly", () => {
    const mockApp = {
      line: jest.fn(),
    } as unknown as App;

    const mockCoordinate = {
      xWindow: jest.fn((x) => x + 10),
      yWindow: jest.fn((y) => y + 20),
    } as unknown as Coordinate;

    const lineSet = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet.add(line1);
    lineSet.add(line2);

    lineSet.render(mockApp, mockCoordinate);

    expect(mockApp.line).toHaveBeenCalledTimes(2);
    expect(mockCoordinate.xWindow).toHaveBeenCalledTimes(4);
    expect(mockCoordinate.yWindow).toHaveBeenCalledTimes(4);
  });

  it("correctly compares two equal LineSets", () => {
    const lineSet1 = new LineSet();
    const lineSet2 = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));

    lineSet1.add(line1);
    lineSet1.add(line2);

    lineSet2.add(line1);
    lineSet2.add(line2);

    expect(LineSet.equals(lineSet1, lineSet2)).toBe(true);
  });

  it("correctly compares two different LineSets", () => {
    const lineSet1 = new LineSet();
    const lineSet2 = new LineSet();
    const line1 = new Line(new Point3D(0, 0, 0), new Point3D(1, 1, 1));
    const line2 = new Line(new Point3D(1, 1, 1), new Point3D(2, 2, 2));
    const line3 = new Line(new Point3D(2, 2, 2), new Point3D(3, 3, 3));

    lineSet1.add(line1);
    lineSet1.add(line2);

    lineSet2.add(line1);
    expect(LineSet.equals(lineSet1, lineSet2)).toBe(false);

    lineSet2.add(line3);

    expect(LineSet.equals(lineSet1, lineSet2)).toBe(false);
  });
});
