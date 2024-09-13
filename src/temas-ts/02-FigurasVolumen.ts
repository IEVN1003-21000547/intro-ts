import { Area } from './02-FigurasArea';

class Volumen extends Area {
    private profundidad: number;
    private areaBP: number;
    private areaBC: number;  
    constructor(base: number, altura: number, perimetro: number, apotema: number, radio: number) {
        super(base, altura, perimetro, apotema, radio);
        this.profundidad = 15;
        this.areaBP = 0;
        this.areaBC = 0;
    }
    VolPR() {
        this.areaBP = this.base * this.altura * this.profundidad;
        console.log(`El volumen del prisma rectangular es: ${this.areaBP}`);
    }
    VolPP() {
        this.areaBP = 0.5 * this.perimetro * this.apotema * this.altura;
        console.log(`El volumen del prisma pentagonal es: ${this.areaBP}`);
    }
    VolC() {
        this.areaBC = 3.1416 * (this.radio ** 2) * this.altura;
        console.log(`El volumen del cilindro es: ${this.areaBC}`);
    }
}
const volPR=new Volumen(5, 10, 0, 0, 0);
volPR.VolPR();

const volPP=new Volumen(0, 10, 20, 5, 0);
volPP.VolPP();

const volC=new Volumen(0, 12, 0, 0, 3);
volC.VolC();
