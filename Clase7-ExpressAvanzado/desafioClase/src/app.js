import express from 'express';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let frase = 'frase inicial'

app.get("/api/frase", (req, res) => {
    res.send({ frase })
})

app.get("/api/palabras/:pos", (req, res) => {
    const pos = req.params.pos;
    if (isNaN(pos)) {
        return res.status(400).send({ status: "Error", error: "Pos debe ser un número" })
    }
    const parsedPos = parseInt(pos);
    const palabras = frase.split(" ");
    if(parsedPos <= 0 || parsedPos > palabras.length) {
        return res.status(400).send({status: "error", error: "Posicion fuera del rando de la frase"})
    }
    
})

app.post("/api/palabras", (req, res) => {
    const palabra = req.body.palabra;
    frase = `${frase} ${palabra}`
    res.send({ palabra, pos: frase.split(' ').length })

});


app.put('api/palabras/:pos', (req, res) => {
    const pos = req.params.pos;
    const palabra = req.body.palabra;
    if (isNaN(pos)) {
        return res.status(400).send({ status: "Error", error: "Pos debe ser un número" })
    }
    const parsedPos = parseInt(pos);
    const palabras = frase.split(" ");
    if(parsedPos <= 0 || parsedPos > palabras.length) {
        return res.status(400).send({status: "error", error: "Posicion fuera del rando de la frase"})
    }
    const anterior = palabras
});

app.delete("/api/user/:id", (req, res) => {
    const pos = req.params.pos;
    
    if(isNaN(pos)){
        return res.status(400).send({ status: "Error", error: "Pos debe ser un número" })
    }
    //const parsedPos = +pos    es lo mismo que parseInt
    const parsedPos = parseInt(pos);
    const palabras = frase.split(" ");
    if(parsedPos <= 0 || parsedPos > palabras.length){
        return res.status(400).send({status: "error", error: "Posicion fuera del rando de la frase"})
    }
    const palabraEliminada = palabras[parsedPos -1];
    palabras.splice(parsedPos -1, 1);

    frase = palabras.join(" ");
    res.send({status: "success", eliminada: palabraEliminada})
});

app.listen(8080, () => {
    console.log("Servidor en puerto 8080")
})