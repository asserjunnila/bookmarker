import { Request, Response } from 'express';
import Book from '../models/book.model';

export function create(req: Request, res: Response): void {
  // Validate request
  if (!req.body.bookName || !req.body.bookAuthor || !req.body.bookMark
    || !req.body.bookMarkDate || !req.body.bookPages || !req.body.readStartDate) {
    res.status(400).send({
      message: 'missing info',
    });
  }

  const book = new Book({
    bookName: req.body.bookName,
    bookAuthor: req.body.bookAuthor,
    bookImg: req.body.bookImg,
    bookMark: req.body.bookMark,
    bookMarkDate: req.body.bookMarkDate,
    bookPages: req.body.bookPages,
    readStartDate: req.body.readStartDate,
  });

  book.save()
    .then((data) => {
      res.send(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
}

export function findAll(req: Request, res: Response): void {
  Book.find()
    .then((foundBooks) => {
      res.send({ books: foundBooks });
    }).catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
}

export function findOne(req: Request, res: Response): void {
  Book.findById(req.params.bookId)
    .then((book) => {
      if (!book) {
        res.status(404).send({
          message: `book not found with id ${req.params.bookId}`,
        });
      }
      res.send(book);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).send({
          message: `book not found with id ${req.params.bookId}`,
        });
      }
      res.status(500).send({
        message: `Error retrieving book with id ${req.params.bookId}`,
      });
    });
}

export function update(req: Request, res: Response): void {
  // Validate Request
  if (!req.body.bookName || !req.body.bookAuthor || !req.body.bookPages || !req.body.bookMarkDate
    || !req.body.bookPages || !req.body.readStartDate) {
    res.status(400).send({
      message: 'needed book info can not be empty',
    });
  }

  Book.findByIdAndUpdate(req.params.bookId, {
    bookName: req.body.bookName,
    bookAuthor: req.body.bookAuthor,
    bookImg: req.body.bookImg,
    bookMark: req.body.bookMark,
    bookMarkDate: req.body.bookMarkDate,
    bookPages: req.body.bookPages,
    readStartDate: req.body.readStartDate,
  }, { new: true })
    .then((book) => {
      if (!book) {
        res.status(404).send({
          message: `book not found with id ${req.params.bookId}`,
        });
      }
      res.send(book);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        res.status(404).send({
          message: `book not found with id ${req.params.bookId}`,
        });
      }
      res.status(500).send({
        message: `Error updating book with id ${req.params.bookId}`,
      });
    });
}

export function remove(req: Request, res: Response): void {
  Book.findByIdAndRemove(req.params.bookId)
    .then((book) => {
      if (!book) {
        res.status(404).send({
          message: `book not found with id ${req.params.bookId}`,
        });
      }
      res.send({ message: 'book deleted successfully!' });
    }).catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        res.status(404).send({
          message: `book not found with id ${req.params.bookId}`,
        });
      }
      res.status(500).send({
        message: `Could not delete book with id ${req.params.bookId}`,
      });
    });
}
