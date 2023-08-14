import {Router} from "express";
import { uploader } from "../utils.js";

const router = Router();
const pets = [];

router.use((req, res, next) => {
    console.log('hola desde router')
    next()
})

router.get('/', (req, res) => {
    res.send({pets})
});

router.post('/', uploader.single('thumbnail'),(req,res) => {
    console.log(req.file.path)
    const pet = req.body;
    pet.thumbnail = `http://localhost:8080/static/images/${req.thumbnail.filename}`
    pets.push(pet);
    res.send({status: 'success'})
})

export default router