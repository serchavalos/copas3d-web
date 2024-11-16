import { Punto3D } from "./punto-3d";

class ColeccionPuntos {
  private puntos: Punto3D[]; // Array to store Punto3D instances
  private n: number; // Number of points currently in the collection

  constructor() {
    this.puntos = [];
    this.n = 0;
  }

  incluye(p: Punto3D): void {
    if (this.n < 10) {
      this.puntos.push(p);
      this.n++;
    }
  }

  obtiene(i: number): Punto3D {
    if (i < 0 || i >= this.n) {
      throw new Error("Index out of bounds");
    }
    return this.puntos[i];
  }

  cantidadPuntos(): number {
    return this.n;
  }

  rotaEnZ(ang: number): void {
    for (let i = 0; i < this.n; i++) {
      this.puntos[i].rotaEnZ(ang);
    }
  }

  rotaEnY(ang: number): void {
    for (let i = 0; i < this.n; i++) {
      this.puntos[i].rotaEnY(ang);
    }
  }

  rotaEnX(ang: number): void {
    for (let i = 0; i < this.n; i++) {
      this.puntos[i].rotaEnX(ang);
    }
  }

  // Equality operator alternative
  static equals(a: ColeccionPuntos, b: ColeccionPuntos): boolean {
    if (a.cantidadPuntos() !== b.cantidadPuntos()) {
      return false;
    }

    for (let i = 0; i < a.cantidadPuntos(); i++) {
      if (!Punto3D.equals(a.obtiene(i), b.obtiene(i))) {
        return false;
      }
    }

    return true;
  }
}

export { ColeccionPuntos };
