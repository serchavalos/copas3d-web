class Punto3D {
  private coorx: number;
  private coory: number;
  private coorz: number;

  constructor(x_ini: number = 0, y_ini: number = 0, z_ini: number = 0) {
    this.coorx = x_ini;
    this.coory = y_ini;
    this.coorz = z_ini;
  }

  // Copy constructor alternative
  static copy(punto: Punto3D): Punto3D {
    return new Punto3D(punto.coorx, punto.coory, punto.coorz);
  }

  x(): number {
    return this.coorx;
  }

  y(): number {
    return this.coory;
  }

  z(): number {
    return this.coorz;
  }

  rotaEnZ(ang: number): void {
    const radianes = (ang * Math.PI) / 180;
    const nuevax = this.coorx * Math.cos(radianes) - this.coory * Math.sin(radianes);
    const nuevay = this.coorx * Math.sin(radianes) + this.coory * Math.cos(radianes);
    this.coorx = nuevax;
    this.coory = nuevay;
  }

  rotaEnY(ang: number): void {
    const radianes = (ang * Math.PI) / 180;
    const nuevax = this.coorx * Math.cos(radianes) + this.coorz * Math.sin(radianes);
    const nuevaz = -this.coorx * Math.sin(radianes) + this.coorz * Math.cos(radianes);
    this.coorx = nuevax;
    this.coorz = nuevaz;
  }

  rotaEnX(ang: number): void {
    const radianes = (ang * Math.PI) / 180;
    const nuevay = this.coory * Math.cos(radianes) - this.coorz * Math.sin(radianes);
    const nuevaz = this.coory * Math.sin(radianes) + this.coorz * Math.cos(radianes);
    this.coorz = nuevaz;
    this.coory = nuevay;
  }

  // Equality operator alternative
  static equals(a: Punto3D, b: Punto3D): boolean {
    return a.x() === b.x() && a.y() === b.y() && a.z() === b.z();
  }
}

export { Punto3D };
