const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.send("Hola Mundo!")
});

app.get("/unapersona", (req, res) => {
    res.json({ id: 100, name: "ezequiel", age: 37 })
});

app.get("/otraparte", (req, res) => {
    res.json([
    { id: 100, name: "ezequiel", age: 37 }, 
    { id: 101, name: "ezequiel2", age: 38 }, 
    { id: 102, name: "ezequiel3", age: 39 }, 
    { id: 103, name: "ezequiel4", age: 40 }
])
});

app.listen(port, () => {
    console.log(`Ejemplo app escuchando en puerto http://localhost:${port}`)
})