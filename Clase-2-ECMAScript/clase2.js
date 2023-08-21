// Punto 1 codeo en vivo

const objetos = [{
  manzanas:3,
  peras:2,
  carne:1,
  jugos:5,
  dulces:2
},
{
  manzanas:1,
  sandias:1,
  huevos:6,
  jugos:1,
  panes:4
}
];


const newArray = [];
let total = 0;

objetos.forEach(producto => {
  keys = Object.keys(producto);
  keys.forEach(key => {
    if(!newArray.includes(key)){
      newArray.push(key)
    }
  })
total = total + Object.values(producto).reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);

});

console.log(newArray)
console.log(total)




