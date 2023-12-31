import express from 'express';
import productsRouter from './routes/products.js'
import cartRouter from './routes/cart.js'
import __dirname from './utils.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(`${__dirname}/public`));



app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

app.get("/", (req, res) => {
    res.send("Servidor ON")
})

const server = app.listen(8080, () => {
    console.log("Server On")
})