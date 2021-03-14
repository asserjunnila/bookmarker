// const Book = require('../models/book.model');
import { Request, Response } from 'express';
import Book from '../models/book.model';


export function create(req: Request, res: Response) {
  // Validate request
  // TODO: rest of the fields
  if (!req.body.bookName || !req.body.bookAuthor || !req.body.bookMark
    || !req.body.bookMarkDate || !req.body.bookPages || !req.body.readStartDate) {
    return res.status(400).send({
      message: "missing info"
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
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the book. Try again"
      });
    });
};

export function findAll(req: Request, res: Response) {
  Book.find()
    .then(books => {
      res.send({ "books": books });
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};

export function findOne(req: Request, res: Response) {
  Book.findById(req.params.bookId)
    .then(book => {
      if (!book) {
        return res.status(404).send({
          message: "book not found with id " + req.params.bookId
        });
      }
      res.send(book);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "book not found with id " + req.params.bookId
        });
      }
      return res.status(500).send({
        message: "Error retrieving book with id " + req.params.bookId
      });
    });
};

export function update(req: Request, res: Response) {
  // Validate Request
  if (!req.body.bookName || !req.body.bookAuthor || !req.body.bookPages || !req.body.bookMarkDate || !req.body.bookPages || !req.body.readStartDate) {
    return res.status(400).send({
      message: `needed book info can not be empty`
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
    .then(book => {
      if (!book) {
        return res.status(404).send({
          message: "book not found with id " + req.params.bookId
        });
      }
      res.send(book);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "book not found with id " + req.params.bookId
        });
      }
      return res.status(500).send({
        message: "Error updating book with id " + req.params.bookId
      });
    });
};

export function remove(req: Request, res: Response) {
  Book.findByIdAndRemove(req.params.bookId)
    .then(book => {
      if (!book) {
        return res.status(404).send({
          message: "book not found with id " + req.params.bookId
        });
      }
      res.send({ message: "book deleted successfully!" });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "book not found with id " + req.params.bookId
        });
      }
      return res.status(500).send({
        message: "Could not delete book with id " + req.params.bookId
      });
    });
};