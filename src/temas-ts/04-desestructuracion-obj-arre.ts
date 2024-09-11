interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:50,
    segundo:10,
    cancion:"Mi niña bonita",
    detalles:{
        autor:"chino y nacho",
        year:2003
    }

}

/*console.log('El volumen actual es: ${reproductor.volumen}');
console.log('Los segundo son: ${reproductor.segundo}');
console.log('La cancion es: ${reproductor.cancion}');
console.log('el cantante es: ${reproductor.detalles.autor}');
console.log('el año es: ${reproductor.detalles.year}');*/

//la desestructuracion de objetos consiste en llegar a las propiedades del objeto sin llamar al objeto mismo
const{volumen,segundo,cancion,detalles}=reproductor;
const{autor, year}=detalles;

console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundo son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`el cantante es: ${autor}`);
console.log(`el año es: ${year}`);

const dbz:string[]=['Goku', 'Majinbu', 'Babidy', 'Freezer'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 2 ${b}`);
