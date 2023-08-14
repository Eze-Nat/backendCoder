const fs = require(`fs`);

fs.writeFileSync(`ejemplo.txt`, `Hola! Este es un archivo fs`)

if(fs.existsSync("ejemplo.txt")){
  let contenido = fs.readFileSync("ejemplo.txt", "utf-8")

  fs.appendFileSync("ejemplo.txt", "archivo editado")
  contenido = fs.readFileSync("ejemplo.txt", "utf-8")

 // fs.unlinkSync("ejemplo.txt")
}

const fecha = new Date()

