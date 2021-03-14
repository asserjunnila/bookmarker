import { Router } from 'express';
import * as book from '../controllers/book.controller';

const bookRoutes = Router();

bookRoutes.get('/books', book.findAll);
bookRoutes.post('/books', book.create);
bookRoutes.get('/books/:bookId', book.findOne);
bookRoutes.put('/books/:bookId', book.update);
bookRoutes.delete('/books/:bookId', book.remove);

export default bookRoutes;