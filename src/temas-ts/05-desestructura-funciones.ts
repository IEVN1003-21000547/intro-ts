export interface Producto
{
    desc:string;
    precio:number;
}

const telefono:Producto=
{
    desc: 'Redmi 8a',
    precio: 800
}

const tablet:Producto=
{
    desc: 'Xiaomi',
    precio: 2000
}
function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((productos)=>{
        total+=productos.precio
    })
    return total*0.16;
}
const articulo1=[telefono, tablet];
const iva1=calcularIVA(articulo1)
console.log(`IVA: ${iva1}`)

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0
    productos.forEach(({precio})=>{
        total+=precio
    })
    return [total,total*0.16];
}
const articulo2=[telefono, tablet];
const [total,iva2]=calcularIVA2(articulo2);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva2}`);