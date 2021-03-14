import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
  bookName: String,
  bookAuthor: String,
  bookImg: String,
  bookMark: Number,
  bookMarkDate: Date,
  bookPages: Number,
  readStartDate: Date,
}, {
  timestamps: true,
});

export default mongoose.model('Book', bookSchema);
// module.exports = mongoose.model('Book', bookSchema);
