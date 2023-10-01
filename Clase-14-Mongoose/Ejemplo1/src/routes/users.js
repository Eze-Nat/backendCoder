import { Router } from "express";
import { userModel } from "../models/user.js"

const router = Router();

router.get("/", async (req, res) => {
  try {
    let users = await userModel.find()
    res.send({result: "success", payload: users})
  } catch (error) {
    console.log("Error de conexion")
  }
})

export default router