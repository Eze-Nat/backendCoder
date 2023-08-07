const http = require("http");
const PORT = 8080;

const date = Date.prototype.getHours()

const server = http.createServer((req, res) => { 
    if(6 <= date <= 12){
        res.end("Buenos dias!")
    }else if(13 <= date <= 19) {
        res.end("Buenas tardes!")
    }else if(20 <= date <= 5){
        res.end("Buenas Noches!")
    }
});

server.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto http://localhost:${PORT}`)
})