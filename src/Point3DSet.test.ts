import { Point3D } from './Point3D';
import { Point3DSet } from './Point3DSet';

describe('Point3DSet Class', () => {
  it('initializes an empty set', () => {
    const set = new Point3DSet();
    expect(set.length()).toBe(0);
  });

  it('adds points to the set', () => {
    const set = new Point3DSet();
    const point1 = new Point3D(1, 2, 3);
    const point2 = new Point3D(4, 5, 6);

    set.add(point1);
    set.add(point2);

    expect(set.length()).toBe(2);
    expect(Point3D.equals(set.get(0), point1)).toBe(true);
    expect(Point3D.equals(set.get(1), point2)).toBe(true);
  });

  it('does not add more than 10 points', () => {
    const set = new Point3DSet();
    for (let i = 0; i < 15; i++) {
      set.add(new Point3D(i, i + 1, i + 2));
    }
    expect(set.length()).toBe(10);
  });

  it('throws error when accessing an invalid index', () => {
    const set = new Point3DSet();
    set.add(new Point3D(1, 2, 3));

    expect(() => set.get(-1)).toThrow('Index out of bounds');
    expect(() => set.get(1)).toThrow('Index out of bounds');
  });

  it('rotates in Z all points in the set', () => {
    const set = new Point3DSet();
    set.add(new Point3D(1, 0, 0));
    set.add(new Point3D(0, 1, 0));

    set.rotateInZ(90);

    const point1 = set.get(0);
    const point2 = set.get(1);

    expect(point1.x()).toBeCloseTo(0, 5);
    expect(point1.y()).toBeCloseTo(1, 5);

    expect(point2.x()).toBeCloseTo(-1, 5);
    expect(point2.y()).toBeCloseTo(0, 5);
  });

  it('rotates in Y all points in the set', () => {
    const set = new Point3DSet();
    set.add(new Point3D(1, 0, 0));
    set.add(new Point3D(0, 0, 1));

    set.rotateInY(90);

    const point1 = set.get(0);
    const point2 = set.get(1);

    expect(point1.x()).toBeCloseTo(0, 5);
    expect(point1.z()).toBeCloseTo(-1, 5);

    expect(point2.x()).toBeCloseTo(1, 5);
    expect(point2.z()).toBeCloseTo(0, 5);
  });

  it('rotates in X all points in the set', () => {
    const set = new Point3DSet();
    set.add(new Point3D(0, 1, 0));
    set.add(new Point3D(0, 0, 1));

    set.rotateInX(90);

    const point1 = set.get(0);
    const point2 = set.get(1);

    expect(point1.y()).toBeCloseTo(0, 5);
    expect(point1.z()).toBeCloseTo(1, 5);

    expect(point2.y()).toBeCloseTo(-1, 5);
    expect(point2.z()).toBeCloseTo(0, 5);
  });

  it('compares two Point3DSets properly', () => {
    const set1 = new Point3DSet();
    const set2 = new Point3DSet();

    set1.add(new Point3D(1, 2, 3));
    set1.add(new Point3D(4, 5, 6));

    set2.add(new Point3D(1, 2, 3));
    set2.add(new Point3D(4, 5, 6));

    expect(Point3DSet.equals(set1, set2)).toBe(true);

    set2.add(new Point3D(7, 8, 9));
    expect(Point3DSet.equals(set1, set2)).toBe(false);
  });
});
