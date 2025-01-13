import { SliceSet } from "./SliceSet";
import { Slice } from "./Slice";
import { Point3D } from "./Point3D";
import { App } from "./application";
import { Coordinate } from "./Coordinate";

describe("SliceSet", () => {
  it("empties the set", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(1, 0, 0));

    sliceSet.push(slice);
    sliceSet.empty();

    expect(sliceSet.length).toBe(0);
  });

  it("rotates all slices in the Z-axis", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(1, 0, 0));
    sliceSet.push(slice);

    sliceSet.rotateInZ(90);
    const rotatedSlice = sliceSet[0];
    expect(rotatedSlice["P"][0].x()).toBeCloseTo(0);
    expect(rotatedSlice["P"][0].y()).toBeCloseTo(1);
  });

  it("rotates all slices in the Y-axis", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(1, 0, 0));
    sliceSet.push(slice);

    sliceSet.rotateInY(90);
    const rotatedSlice = sliceSet[0];
    expect(rotatedSlice["P"][0].x()).toBeCloseTo(0);
    expect(rotatedSlice["P"][0].z()).toBeCloseTo(-1);
  });

  it("rotates all slices in the X-axis", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(0, 1, 0));
    sliceSet.push(slice);

    sliceSet.rotateInX(90);
    const rotatedSlice = sliceSet[0];
    expect(rotatedSlice["P"][0].y()).toBeCloseTo(0);
    expect(rotatedSlice["P"][0].z()).toBeCloseTo(1);
  });

  it("get coordinates", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(0, 1, 0));
    sliceSet.push(slice);

    expect(sliceSet.getCoordinates()[0][0]).toEqual([{"x": 0, "y": 1}, {"x": 0, "y": 1}]);
  });
});
