import { Point3D } from './Point3D';

describe('Point3D Class', () => {
  it('initializes correctly', () => {
    const point = new Point3D(1, 2, 3);
    expect(point.x()).toBe(1);
    expect(point.y()).toBe(2);
    expect(point.z()).toBe(3);
  });

  it('initializes to (0, 0, 0)', () => {
    const point = new Point3D();
    expect(point.x()).toBe(0);
    expect(point.y()).toBe(0);
    expect(point.z()).toBe(0);
  });

  it('creates copies an identical Point3D', () => {
    const point = new Point3D(4, 5, 6);
    const copy = Point3D.copy(point);
    expect(Point3D.equals(point, copy)).toBe(true);
  });

  it('rotates in Z the point around the Z-axis', () => {
    const point = new Point3D(1, 0, 0);
    point.rotateInZ(90);
    expect(point.x()).toBeCloseTo(0, 5);
    expect(point.y()).toBeCloseTo(1, 5);
    expect(point.z()).toBe(0);
  });

  it('rotates in Y the point around the Y-axis', () => {
    const point = new Point3D(0, 0, 1);
    point.rotateInY(90);
    expect(point.x()).toBeCloseTo(1, 5);
    expect(point.y()).toBe(0);
    expect(point.z()).toBeCloseTo(0, 5);
  });

  it('rotates in X the point around the X-axis', () => {
    const point = new Point3D(0, 1, 0);
    point.rotateInX(90);
    expect(point.x()).toBe(0);
    expect(point.y()).toBeCloseTo(0, 5);
    expect(point.z()).toBeCloseTo(1, 5);
  });

  it('determines equality of two points properly', () => {
    const point1 = new Point3D(1, 2, 3);
    const point2 = new Point3D(1, 2, 3);
    const point3 = new Point3D(4, 5, 6);
    expect(Point3D.equals(point1, point2)).toBe(true);
    expect(Point3D.equals(point1, point3)).toBe(false);
  });

  it('remains unchanged when rotating by 0 degrees', () => {
    const point = new Point3D(3, 4, 5);
    point.rotateInZ(0);
    point.rotateInY(0);
    point.rotateInX(0);
    expect(point.x()).toBe(3);
    expect(point.y()).toBe(4);
    expect(point.z()).toBe(5);
  });
});
