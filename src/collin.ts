import { Linea } from "./linea";
import { App } from "./application";
import { Coordenada } from "./coordenada";

class ColeccionLineas {
  private lineas: Linea[] = new Array(10); // Fixed-size array for lines
  private n: number = 0; // Number of current lines

  incluye(linea: Linea): void {
    if (this.n < 10) {
      this.lineas[this.n] = linea;
      this.n++;
    } else {
      throw new Error("ColeccionLineas is full. Cannot add more lines.");
    }
  }

  obtiene(i: number): Linea {
    if (i < 0 || i >= this.n) {
      throw new Error("Index out of bounds");
    }
    return this.lineas[i];
  }

  cantidadLineas(): number {
    return this.n;
  }

  vacia(): void {
    this.n = 0;
  }

  dibuja(app: App, c: Coordenada): void {
    for (let i = 0; i < this.n; i++) {
      this.lineas[i].dibuja(app, c);
    }
  }

  static equals(a: ColeccionLineas, b: ColeccionLineas): boolean {
    if (a.cantidadLineas() !== b.cantidadLineas()) {
      return false;
    }
    for (let i = 0; i < a.cantidadLineas(); i++) {
      if (!Linea.equals(a.obtiene(i), b.obtiene(i))) {
        return false;
      }
    }
    return true;
  }
}

export { ColeccionLineas };
