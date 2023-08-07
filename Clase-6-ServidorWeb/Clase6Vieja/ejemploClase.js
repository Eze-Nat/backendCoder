const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => { // generalmente req es la peticion, respuesta es res, asi que lo cambie
    // if req == /listado/alumnos es la forma para hacer llamados y respuestas de una forma nativa (en el curso usamos express)
    res.end("Hola mundo")
});

server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto http://localhost:${PORT}`)
})

// el nodemon local es : npx nodemon.index.js o agregar al script start directo como: nodemon index.js