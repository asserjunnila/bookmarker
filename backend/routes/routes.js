module.exports = (app) => {

    // BOOK ROUTES
    const book = require('../controllers/book.controller.js');
    // Create a new book
    app.post('/book', book.create);
    // Retrieve all books
    app.get('/books', book.findAll);
    // Retrieve a single book with bookId
    app.get('/book/:bookId', book.findOne);
    // Update an book with bookId
    app.put('/book/:bookId', book.update);
    // Delete an book with bookId
    app.delete('/book/:bookId', book.delete);
}