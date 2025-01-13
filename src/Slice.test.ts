import { Slice } from './Slice';
import { Point3D } from './Point3D';
import { Point3DSet } from './Point3DSet';
import { LineSet } from './LineSet';
import { Line } from './Line';

describe('Slice', () => {
  let point: Point3D;

  beforeEach(() => {
    point = new Point3D(1, 2, 3);
  });

  it('creates a Slice with initial point', () => {
    const slice = new Slice(point);
    expect(slice).toBeDefined();
    expect(slice.getCoordinates().length).toBe(30);
  });

  it('rotates Slice in Z axis', () => {
    const slice = new Slice(point);
    slice.rotateInZ(90);
    // Add assertions to check the rotation effect
    expect(slice.getCoordinates()).toBeDefined();
  });

  it('rotates Slice in Y axis', () => {
    const slice = new Slice(point);
    slice.rotateInY(90);
    // Add assertions to check the rotation effect
    expect(slice.getCoordinates()).toBeDefined();
  });

  it('rotates Slice in X axis', () => {
    const slice = new Slice(point);
    slice.rotateInX(90);
    // Add assertions to check the rotation effect
    expect(slice.getCoordinates()).toBeDefined();
  });

  it('regenerates lines after rotation', () => {
    const slice = new Slice(point);
    slice.rotateInX(90);
    expect(slice.getCoordinates().length).toBe(30);
  });

  it('checks equality of two Slices', () => {
    const slice1 = new Slice(point);
    const slice2 = new Slice(point);
    expect(Slice.equals(slice1, slice2)).toBe(true);
  });

  it('checks inequality of two Slices', () => {
    const slice1 = new Slice(point);
    const differentPoint = new Point3D(4, 5, 6);
    const slice2 = new Slice(differentPoint);
    expect(Slice.equals(slice1, slice2)).toBe(false);
  });
});
