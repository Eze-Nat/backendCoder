import { Router } from "express";

const viewsRoute = Router();

viewsRoute.get('/realtimeproducts', async (req, res) => {
  res.render('/realTimeProducts')
})

export default viewsRoute