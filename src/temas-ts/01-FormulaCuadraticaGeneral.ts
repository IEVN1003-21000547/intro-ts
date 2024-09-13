/* Crear un programa que calcule en programacion orientada a objetos que
me permita calcular con la ecuacion cuadratica*/
class EcuacionCuadratica {
  private a: number;
  private b: number;
  private c: number;
  private posraiz: number;
  private raiz1: number;
  private raiz2: number;
  private raiz: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.posraiz = 0;
    this.raiz1 = 0;
    this.raiz2 = 0;
    this.raiz = 0;
  }

  Raices1() {
    this.posraiz = (this.b * this.b) - (4 * this.a * this.c);
  }
  Raices2() {
    this.Raices1();

    if (this.posraiz > 0) {
      this.raiz1 = (-this.b + Math.sqrt(this.posraiz)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(this.posraiz)) / (2 * this.a);
      console.log(`Los valores de x1 y x2 son: x1= ${this.raiz1} x2= ${this.raiz2}`);
    } 
    else if (this.posraiz <= 0) {
      this.raiz = -this.b / (2 * this.a);
      console.log(`Raíz: x = ${this.raiz}`);
    }
  }
}

const ecuacion = new EcuacionCuadratica(1, 6, 2);
ecuacion.Raices1();
ecuacion.Raices2();