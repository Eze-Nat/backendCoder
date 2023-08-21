import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import userRouter from './routes/users.js';
import viewsRouter from "./routes/views.js";
import {Server} from "socket.io"

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));

app.use('/', viewsRouter)
app.use('/api/users', userRouter)

const server = app.listen(8080, () => {
  console.log('Server ON')
})

const socketServer = new Server(server)
socketServer.on("connection", socket => {
  console.log("Nuevo cliente conectado")
})