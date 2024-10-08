/*ejercicio dos 
crear un programa que tranaje con herencias que me permita calcular el area del
rectangulo, oentagono y circulo
y esa va a heredar para sacar el volumen de un prisma rectangular, un primsa pentagonal y un cilindro*/

export class Area{
    protected base:number;
    protected altura:number;

    protected perimetro:number;
    protected apotema:number;

    protected radio:number;

    constructor(base:number, altura:number, perimetro:number, apotema:number, radio:number){
        this.base = base;
        this.altura = altura;

        this.perimetro = perimetro;
        this.apotema = apotema;

        this.radio = radio;

    }
    imprimir1(){
        console.log(`El area de tu rectangulo es ${this.base * this.altura}`)
    }
    imprimir2(){
        console.log(`El area de tu pentagono es ${0.5 * this.perimetro * this.apotema}`)
    }
    imprimir3(){
        console.log(`El area de tu circulo es ${3.1416 * this.radio ** 2}`)
    }

}
const area1=new Area(5 ,7, 0, 0, 0);
area1.imprimir1()

const area2=new Area(0, 0, 5 , 5, 0);
area2.imprimir2()

const area3=new Area(0, 0, 0, 0, 6);
area3.imprimir3()
