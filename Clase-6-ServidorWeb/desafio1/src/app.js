import express  from "express";

const app = express();

app.get('/bienvenida', (req, res) => {
    res.send(`<h1 style="color:blue"> Bienvenido a mi primer servidor en express </h1>`)
})

app.get('/usuario', (req, res) => {
    res.send({
        nombre: "Ezequiel",
        apellido: "Natale",
        edad: 37,
    })
});

app.listen(8080, () => {
    console.log('Servidor arriba en puerto 8080')
})