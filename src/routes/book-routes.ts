import express from "express";
import { addBook, deleteBook, getBook, updateBook} from "../controller/book-controller.js";
const router=express.Router();

router.get('/books',getBook);
router.post('/books',addBook);
router.put('/books/:id',updateBook);
router.delete('/books/:id',deleteBook)

export default router;