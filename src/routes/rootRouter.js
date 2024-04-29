import express from "express"
import articlesRouter from "./articlesRouter.js"

const rootRouter = new express.Router()
rootRouter.get("/homepage", req, res => {
  res.send("look at my pretty sandwich app")
})
rootRouter.use("/articles", articlesRouter)

export default rootRouter