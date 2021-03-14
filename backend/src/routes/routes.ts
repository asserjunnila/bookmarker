import { Router } from 'express';
import * as book from '../controllers/book.controller';

const bookRoutes = Router();

bookRoutes.get('/books', book.findAll);
bookRoutes.post('/books', book.create);
bookRoutes.get('/books/:bookId', book.findOne);
bookRoutes.put('/books/:bookId', book.update);
bookRoutes.delete('/books/:bookId', book.remove);

export default bookRoutes;

// module.exports = (app) => {

//     // BOOK ROUTES
//     const book = require('../controllers/book.controller.js');
//     // Create a new book
//     app.post('/books', book.create);
//     // Retrieve all books
//     app.get('/books', book.findAll);
//     // Retrieve a single book with bookId
//     app.get('/books/:bookId', book.findOne);
//     // Update an book with bookId
//     app.put('/books/:bookId', book.update);
//     // Delete an book with bookId
//     app.delete('/books/:bookId', book.delete);
// }