export interface Rotatable3D {
  rotateInZ(angle: number): void;
  rotateInY(angle: number): void;
  rotateInX(angle: number): void;
}

export type PointCoordinate = { x: number; y: number; };
