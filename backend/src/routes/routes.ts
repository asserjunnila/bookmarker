import Router, { Request, Response } from 'express'
import * as bookController from '../controllers/book.controller'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({ "message": "Welcome to the book database backend." });
});

router.post('/books', bookController.create);
// Retrieve all books
router.get('/books', bookController.findAll);
// Retrieve a single book with bookId
router.get('/books/:bookId', bookController.findOne);
// Update an book with bookId
router.put('/books/:bookId', bookController.update);
// Delete an book with bookId
router.delete('/books/:bookId', bookController.deleteBook);

export default router
