import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(__dirname + '/public'));

const users = [
  {
    name: "Juan",
    lastName: "Pérez",
    age: 30,
    phone: "123-456-7890",
    email: "juan@example.com"
  },
  {
    name: "María",
    lastName: "González",
    age: 25,
    phone: "987-654-3210",
    email: "maria@example.com"
  },
  {
    name: "Carlos",
    lastName: "Ramírez",
    age: 40,
    phone: "555-123-4567",
    email: "carlos@example.com"
  },
  {
    name: "Ana",
    lastName: "López",
    age: 28,
    phone: "777-888-9999",
    email: "ana@example.com"
  },
  {
    name: "Pedro",
    lastName: "Martínez",
    age: 22,
    phone: "444-555-6666",
    email: "pedro@example.com"
  }
];

app.get('/', (req,res) => {
  const random = Math.floor(Math.random()*users.length);
  res.render('users', {user: users[random]})
})


const server = app.listen(8080, () => {
  console.log('Server ON')
})