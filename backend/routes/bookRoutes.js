import express from 'express'
import { getBooks, createBooks, getBookDetail, deleteBook, updateBook, } from '../controllers/bookControllers.js'

const router = express.Router()

router.route('/').get(getBooks).post(createBooks) 
router.route('/:id').get(getBookDetail).put(updateBook).delete(deleteBook)

export default router