export interface Rotatable3D {
  rotateInZ(angle: number): void;
  rotateInY(angle: number): void;
  rotateInX(angle: number): void;
}

export interface Collection<T> {
  add(item: T): void;
  empty(): void;
  get?(index: number): T;
  length?(): number;
}
