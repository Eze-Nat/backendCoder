import  express  from "express";

const app = express();
const port = 8080

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const articulos = [];

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

app.get("/articulos", (req, res) => {
    res.send({articulos})
})

app.post("/articulos", (req, res) =>  {
    const articulo = req.body;

    articulo.id = articulos.length +1;
    articulos.push(articulo);
    res.send({articulos})
});

app.put("/articulos/:idArticulo", (req, res) => {
    const id = +req.params.idArticulo;
    const articulo = req.body;

    const indexArticulo = articulos.findIndex(articulo => articulo.id == id);
    articulo.id = articulos[indexArticulo].id
    articulos[indexArticulo] = articulo
    res.send(articulos[indexArticulo])
})

app.delete("/articulos/:idArticulo", (req, res) => {
    const id = +req.params.idArticulo;
    const newArrayArticulos = articulos.filter(articulo => articulo.id !== id)
    if(articulos.length === newArrayArticulos.length) {
        return res.status(400).send({status: "Error", message: `No se encontro articulo con id ${id}`})
    }
})

app.listen(port, () => {
    console.log(`Server en localhost:${port}`)
})