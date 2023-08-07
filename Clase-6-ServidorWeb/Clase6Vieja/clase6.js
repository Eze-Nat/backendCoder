const http = require("http");

const server = http.createServer((request, response) => {
    response.end(`Hola mundo desde servidor`)
});

server.listen(8080, () => {
    console.log((`Estamos en linea en el puerto 8080`))
})