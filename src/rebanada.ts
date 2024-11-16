import { App } from "./application";
import { Coordenada } from "./coordenada";
import { ColeccionLineas } from "./collin";
import { ColeccionPuntos } from "./colpunto";
import { Linea } from "./linea";
import { Punto3D } from "./punto-3d";

class Rebanada {
  private P: ColeccionPuntos = new ColeccionPuntos();
  private L: ColeccionLineas = new ColeccionLineas();

  constructor(pinicial?: Punto3D) {
    if (pinicial) {
      for (let i = 0; i < 360; i += 36) {
        const aux = Punto3D.copy(pinicial);
        aux.rotaEnY(i);
        this.P.incluye(aux);
      }
      for (let i = 0; i < this.P.cantidadPuntos() - 1; i++) {
        this.L.incluye(new Linea(this.P.obtiene(i), this.P.obtiene(i + 1)));
      }
      this.L.incluye(
        new Linea(
          this.P.obtiene(this.P.cantidadPuntos() - 1),
          this.P.obtiene(0)
        )
      );
    }
  }

  rotaEnZ(ang: number): void {
    this.P.rotaEnZ(ang);
    this.regenerateLines();
  }

  rotaEnY(ang: number): void {
    this.P.rotaEnY(ang);
    this.regenerateLines();
  }

  rotaEnX(ang: number): void {
    this.P.rotaEnX(ang);
    this.regenerateLines();
  }

  dibuja(app: App, c: Coordenada): void {
    this.L.dibuja(app, c);
  }

  private regenerateLines(): void {
    this.L.vacia();
    for (let i = 0; i < this.P.cantidadPuntos() - 1; i++) {
      this.L.incluye(new Linea(this.P.obtiene(i), this.P.obtiene(i + 1)));
    }
    this.L.incluye(
      new Linea(
        this.P.obtiene(this.P.cantidadPuntos() - 1),
        this.P.obtiene(0)
      )
    );
  }

  static equals(a: Rebanada, b: Rebanada): boolean {
    return (
      ColeccionPuntos.equals(a.P, b.P) && ColeccionLineas.equals(a.L, b.L)
    );
  }
}

export { Rebanada };
