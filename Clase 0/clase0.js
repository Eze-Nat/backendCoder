const nombre = "ezequiel";
let edad = 37;
const precio = 500;
const series = ["Dark", "YoRobot", "Castlevania"];
const peliculas = [
  {
    nombre: "Harry Potter",
    estreno: 2000,
    protagonistas: [
      "Harry Potter"
    ],
  },
  {
    nombre: "Harry Potter",
    estreno: 2000,
    protagonistas: [
      "Harry Potter"
    ],
  }
]


console.log(nombre);
console.log(edad);
console.log(precio);
console.log(series);
console.log(peliculas);

edad = edad + 1;

console.log("Edad incrementada", edad);

series.push("Lucifer");

// misSeriesFavoritas = ["The last of us", "TWD", "GOT", "Lucifer"];

console.log("Nuevas series favoritas", series);

