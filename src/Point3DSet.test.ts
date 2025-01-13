import { Point3D } from './Point3D';
import { Point3DSet } from './Point3DSet';

describe('Point3DSet Class', () => {
  it('initializes an empty set', () => {
    const set = new Point3DSet();
    expect(set.length).toBe(0);
  });

  it('empties an set', () => {
    const set = new Point3DSet();
    const point1 = new Point3D(1, 2, 3);
    const point2 = new Point3D(4, 5, 6);

    set.push(point1);
    set.push(point2);
    set.empty();

    expect(set.length).toBe(0);
  });

  it('adds points to the set', () => {
    const set = new Point3DSet();
    const point1 = new Point3D(1, 2, 3);
    const point2 = new Point3D(4, 5, 6);

    set.push(point1);
    set.push(point2);

    expect(set.length).toBe(2);
    expect(Point3D.equals(set[0], point1)).toBe(true);
    expect(Point3D.equals(set[1], point2)).toBe(true);
  });

  it('rotates in Z all points in the set', () => {
    const set = new Point3DSet();
    set.push(new Point3D(1, 0, 0));
    set.push(new Point3D(0, 1, 0));

    set.rotateInZ(90);

    const point1 = set[0];
    const point2 = set[1];

    expect(point1.x()).toBeCloseTo(0, 5);
    expect(point1.y()).toBeCloseTo(1, 5);

    expect(point2.x()).toBeCloseTo(-1, 5);
    expect(point2.y()).toBeCloseTo(0, 5);
  });

  it('rotates in Y all points in the set', () => {
    const set = new Point3DSet();
    set.push(new Point3D(1, 0, 0));
    set.push(new Point3D(0, 0, 1));

    set.rotateInY(90);

    const point1 = set[0];
    const point2 = set[1];

    expect(point1.x()).toBeCloseTo(0, 5);
    expect(point1.z()).toBeCloseTo(-1, 5);

    expect(point2.x()).toBeCloseTo(1, 5);
    expect(point2.z()).toBeCloseTo(0, 5);
  });

  it('rotates in X all points in the set', () => {
    const set = new Point3DSet();
    set.push(new Point3D(0, 1, 0));
    set.push(new Point3D(0, 0, 1));

    set.rotateInX(90);

    const point1 = set[0];
    const point2 = set[1];

    expect(point1.y()).toBeCloseTo(0, 5);
    expect(point1.z()).toBeCloseTo(1, 5);

    expect(point2.y()).toBeCloseTo(-1, 5);
    expect(point2.z()).toBeCloseTo(0, 5);
  });

  it('compares two Point3DSets properly', () => {
    const set1 = new Point3DSet();
    const set2 = new Point3DSet();

    set1.push(new Point3D(1, 2, 3));
    set1.push(new Point3D(4, 5, 6));

    set2.push(new Point3D(1, 2, 3));
    set2.push(new Point3D(4, 5, 6));

    expect(Point3DSet.equals(set1, set2)).toBe(true);

    set2.push(new Point3D(7, 8, 9));
    expect(Point3DSet.equals(set1, set2)).toBe(false);
  });
});
