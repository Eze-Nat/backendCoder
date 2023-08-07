import ProductManager from "../productManager.js";
import express from "express";


const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const productManager = new ProductManager();

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

app.get("/products", (req, res) => {
    const limit = parseInt(req.query.limit);
    const products = productManager.getProducts();
    if (limit && !isNaN(limit)) {
        res.json(products.slice(0, limit));
    } else {
        res.json(products);
    }
});


app.get("/products/:pid", (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId);
    if (!product) {
        res.status(404).json({ error: "Producto no encontrado" });
    } else {
        res.json(product);
    }
});


app.post("/products", (req, res) => {
    const { title, description, price, thumbnail, code, stock } = req.body;
    try {
        productManager.addProduct(title, description, price, thumbnail, code, stock);
        res.status(201).json({ message: "Producto agregado exitosamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.put("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const updatedProduct = req.body;
    try {
        productManager.updateProduct({ id: productId, ...updatedProduct });
        res.json({ message: "Producto actualizado exitosamente" });
    } catch (error) {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});


app.delete("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    try {
        productManager.deleteProductById(productId);
        res.json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
