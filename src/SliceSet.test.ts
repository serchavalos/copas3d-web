import { SliceSet } from "./SliceSet";
import { Slice } from "./Slice";
import { Point3D } from "./Point3D";
import { App } from "./application";
import { Coordinate } from "./Coordinate";

describe("SliceSet", () => {
  it("rotates all slices in the Z-axis", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(1, 0, 0));
    sliceSet.add(slice);

    sliceSet.rotateInZ(90);
    const rotatedSlice = sliceSet.get(0);
    expect(rotatedSlice["P"].get(0).x()).toBeCloseTo(0);
    expect(rotatedSlice["P"].get(0).y()).toBeCloseTo(1);
  });

  it("rotates all slices in the Y-axis", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(1, 0, 0));
    sliceSet.add(slice);

    sliceSet.rotateInY(90);
    const rotatedSlice = sliceSet.get(0);
    expect(rotatedSlice["P"].get(0).x()).toBeCloseTo(0);
    expect(rotatedSlice["P"].get(0).z()).toBeCloseTo(1);
  });

  it("rotates all slices in the X-axis", () => {
    const sliceSet = new SliceSet();
    const slice = new Slice(new Point3D(0, 1, 0));
    sliceSet.add(slice);

    sliceSet.rotateInX(90);
    const rotatedSlice = sliceSet.get(0);
    expect(rotatedSlice["P"].get(0).y()).toBeCloseTo(0);
    expect(rotatedSlice["P"].get(0).z()).toBeCloseTo(1);
  });

  // it("renders all slices using the App and Coordinate objects", () => {
  //   const mockApp = {
  //     drawLine: jest.fn(),
  //   } as unknown as App;
  //   const mockCoordinate = new Coordinate(0, 0, 0, 0, 0, 0);

  //   const sliceSet = new SliceSet();
  //   const slice1 = new Slice(new Point3D(1, 0, 0));
  //   const slice2 = new Slice(new Point3D(0, 1, 0));
  //   sliceSet.add(slice1);
  //   sliceSet.add(slice2);

  //   sliceSet.render(mockApp, mockCoordinate);

  //   expect(mockApp.drawLine).toHaveBeenCalledTimes(
  //     slice1["L"].length() + slice2["L"].length()
  //   );
  // });
});
