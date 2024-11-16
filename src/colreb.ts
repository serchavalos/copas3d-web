import { Rebanada } from "./rebanada";
import { App } from "./application";
import { Coordenada } from "./coordenada";

class ColeccionRebanada {
  rebanadas: Rebanada[] = [];

  constructor() {}

  incluye(rebanada: Rebanada): void {
    this.rebanadas.push(rebanada);
  }

  vacia(): void {
    this.rebanadas = [];
  }

  rotaEnZ(ang: number): void {
    for (let i = 0; i < this.rebanadas.length; i++) {
      this.rebanadas[i].rotaEnZ(ang);
    }
  }

  rotaEnY(ang: number): void {
    for (let i = 0; i < this.rebanadas.length; i++) {
      this.rebanadas[i].rotaEnY(ang);
    }
  }

  rotaEnX(ang: number): void {
    for (let i = 0; i < this.rebanadas.length; i++) {
      this.rebanadas[i].rotaEnX(ang);
    }
  }

  dibuja(app: App, c: Coordenada): void {
    for (let i = 0; i < this.rebanadas.length; i++) {
      this.rebanadas[i].dibuja(app, c);
    }
  }
}

export { ColeccionRebanada };
