import{calcularIVA2,Producto} from "./05-desestructura-funciones"


const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:100
    },
    {
        desc:'Telefono2',
        precio:200
    },
    {
        desc:'Telefono3',
        precio:300
    }
]
const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);
// para poner las comillas asi `` es con alt+96 ``
// para poner mayor que asi > es con alt+62 >
// para poner menor que asi < es con alt+60 < 