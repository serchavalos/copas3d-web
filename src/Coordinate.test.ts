import { Coordinate } from "./Coordinate";
import { App } from "./application";

describe("Coordinate", () => {
  let appMock: jest.Mocked<App>;
  let coordinate: Coordinate;

  beforeEach(() => {
    appMock = {
      assignPenColor: jest.fn(),
      line: jest.fn(),
    } as unknown as jest.Mocked<App>;

    // Initialize the Coordinate with some values for window size and real coordinate limits
    coordinate = new Coordinate(100, 200, 0, 0, 10, 10);
  });

  it("correctly calculates xWindow", () => {
    const result = coordinate.xWindow(5); // The real coordinate x = 5
    const expected = Math.ceil((5 * 100) / (10 - 0) + coordinate["x0"]); // Should be calculated
    expect(result).toBe(expected);
  });

  it("correctly calculates yWindow", () => {
    const result = coordinate.yWindow(5); // The real coordinate y = 5
    const expected = Math.ceil((-5 * 200) / (10 - 0) + coordinate["y0"]); // Should be calculated
    expect(result).toBe(expected);
  });

  it("correctly calculates xReal", () => {
    const x = 50;
    const result = coordinate.xReal(x);
    const expected = ((x - coordinate["x0"]) * (10 - 0)) / 100;
    expect(result).toBeCloseTo(expected, 5);
  });

  it("correctly calculates yReal", () => {
    const y = 100;
    const result = coordinate.yReal(y);
    const expected = -(((y - coordinate["y0"]) * (10 - 0)) / 200);
    expect(result).toBeCloseTo(expected, 5);
  });

  it("renders the coordinate system lines correctly", () => {
    coordinate.render(appMock);

    // Check that app.assignPenColor was called with the correct color
    expect(appMock.assignPenColor).toHaveBeenCalledWith("rgb(0,0,0)");

    // Check that app.line was called to draw the horizontal and vertical lines
    expect(appMock.line).toHaveBeenCalledWith(0, Math.ceil(coordinate["y0"]), 100, Math.ceil(coordinate["y0"]));
    expect(appMock.line).toHaveBeenCalledWith(Math.ceil(coordinate["x0"]), 0, Math.ceil(coordinate["x0"]), 200);
  });

  it("correctly handles negative xWindow value", () => {
    coordinate = new Coordinate(100, 200, -10, -10, 0, 0);
    const result = coordinate.xWindow(-5); // The real coordinate x = -5
    const expected = Math.floor((-5 * 100) / (0 - -10) + coordinate["x0"]);
    expect(result).toBe(expected);
  });

  it("correctly handles negative yWindow value", () => {
    coordinate = new Coordinate(100, 200, -10, -10, 0, 0);
    const result = coordinate.yWindow(-5); // The real coordinate y = -5
    const expected = Math.floor((-(-5) * 200) / (0 - -10) + coordinate["y0"]);
    expect(result).toBe(expected);
  });

  it("correctly handles small window size", () => {
    coordinate = new Coordinate(1, 1, 0, 0, 1, 1);
    const xResult = coordinate.xWindow(0.5); 
    const yResult = coordinate.yWindow(0.5); 
    expect(xResult).toBe(1);
    expect(yResult).toBe(1);
  });
});
