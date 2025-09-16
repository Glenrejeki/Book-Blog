import express from "express";
import dotenv from 'dotenv'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import bookRoutes from './routes/bookRoutes.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.get("/", (req, res)=> res.send('Server is running'))
app.use('/api/books', bookRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server is started on port ${port}`))