import express from 'express';
import handlebars from "express-handlebars"
import productsRouter from './routes/products.js'
import cartRouter from './routes/cart.js'
import __dirname from './utils.js'
import { Server } from 'socket.io';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(`${__dirname}/public`));



app.use('/api/products', productsRouter)
app.use('/api/cart', cartRouter)

/* app.get("/", (req, res) => {
    res.send("Servidor ON")
}) */Clase-

app.get("/", async (req, res) => {
    try {
        const response = await fetch('http://localhost:8080/api/products');
        const products = await response.json();
        res.render('home', { products });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.render('home', { products: [] });
    }
});

app.get("/realtimeproducts", (req, res) => {
    res.render('realTimeProducts');
});

const server = app.listen(8080, () => {
    console.log("Server On");
});

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Usuario conectado al socket:', socket.id);

    socket.on('newProductAdded', () => {
        io.emit('productsUpdate');
    });
});