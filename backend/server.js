import express from "express";
import dotenv from 'dotenv'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config()
const app = express()
const port = process.env.PORT

app.get("/", (req, res)=> res.send('Server is running'))

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server is started on port ${port}`))