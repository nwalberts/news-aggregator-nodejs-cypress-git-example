import express from "express"
import articlesRouter from "./articlesRouter.js"

const rootRouter = new express.Router()
rootRouter.get("/dashboard", (req, res) => {
  res.send("look at my handsome dashboard")
}) 
rootRouter.use("/articles", articlesRouter)

export default rootRouter