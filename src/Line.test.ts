import { Line } from "./Line";
import { Point3D } from "./Point3D";
import { App } from "./application";
import { Coordinate } from "./Coordinate";

describe("Line", () => {
  it("initializes with default points if none are provided", () => {
    const line = new Line();
    expect(line["a"].x()).toBe(0);
    expect(line["a"].y()).toBe(0);
    expect(line["a"].z()).toBe(0);
    expect(line["b"].x()).toBe(0);
    expect(line["b"].y()).toBe(0);
    expect(line["b"].z()).toBe(0);
  });

  it("initializes with provided points", () => {
    const pointA = new Point3D(1, 2, 3);
    const pointB = new Point3D(4, 5, 6);
    const line = new Line(pointA, pointB);

    expect(line["a"].x()).toBe(1);
    expect(line["a"].y()).toBe(2);
    expect(line["a"].z()).toBe(3);

    expect(line["b"].x()).toBe(4);
    expect(line["b"].y()).toBe(5);
    expect(line["b"].z()).toBe(6);
  });

  it("renders correctly using the app and coordinate system", () => {
    const mockApp = {
      line: jest.fn(),
    } as unknown as App;

    const mockCoordinate = {
      xWindow: jest.fn((x) => x + 10), // Mock coordinate transformation
      yWindow: jest.fn((y) => y + 20),
    } as unknown as Coordinate;

    const pointA = new Point3D(1, 2, 0);
    const pointB = new Point3D(3, 4, 0);
    const line = new Line(pointA, pointB);

    line.render(mockApp, mockCoordinate);

    expect(mockCoordinate.xWindow).toHaveBeenCalledWith(1);
    expect(mockCoordinate.yWindow).toHaveBeenCalledWith(2);
    expect(mockCoordinate.xWindow).toHaveBeenCalledWith(3);
    expect(mockCoordinate.yWindow).toHaveBeenCalledWith(4);

    expect(mockApp.line).toHaveBeenCalledWith(11, 22, 13, 24);
  });

  it("correctly compares two equal lines", () => {
    const pointA1 = new Point3D(1, 2, 3);
    const pointB1 = new Point3D(4, 5, 6);

    const pointA2 = new Point3D(1, 2, 3);
    const pointB2 = new Point3D(4, 5, 6);

    const line1 = new Line(pointA1, pointB1);
    const line2 = new Line(pointA2, pointB2);

    expect(Line.equals(line1, line2)).toBe(true);
  });

  it("correctly compares two different lines", () => {
    const pointA1 = new Point3D(1, 2, 3);
    const pointB1 = new Point3D(4, 5, 6);

    const pointA2 = new Point3D(0, 0, 0);
    const pointB2 = new Point3D(4, 5, 6);

    const line1 = new Line(pointA1, pointB1);
    const line2 = new Line(pointA2, pointB2);

    expect(Line.equals(line1, line2)).toBe(false);
  });
});
