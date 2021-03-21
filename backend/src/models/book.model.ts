import mongoose from 'mongoose';

interface IBook {
  bookName: string;
  bookAuthor: string;
  bookImg: string;
  bookMark: number;
  bookMarkDate: Date;
  bookPages: number;
  readStartDate: Date;
  bookISBN: number;
}

interface BookModelInterface extends mongoose.Model<BookDoc> {
  build(attr: IBook): BookDoc
}

interface BookDoc extends mongoose.Document {
  bookName: string;
  bookAuthor: string;
  bookImg: string;
  bookMark: number;
  bookMarkDate: Date;
  bookPages: number;
  readStartDate: Date;
  bookISBN: number;
}

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  bookImg: {
    type: String,
    required: true,
  },
  bookMark: {
    type: Number,
    required: true,
  },
  bookMarkDate: {
    type: Date,
    required: true,
  },
  bookPages: {
    type: Number,
    required: true,
  },
  readStartDate: {
    type: Date,
    required: true,
  },
  bookISBN: {
    type: Number,
    required: false,
  },
}, {
  timestamps: true,
});

bookSchema.statics.build = (attr: IBook) => {
  return new Book(attr);
};

const Book = mongoose.model<BookDoc, BookModelInterface>('Book', bookSchema);

export default Book;
