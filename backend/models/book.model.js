const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookName: String,
    bookAuthor: String,
    bookImg: String,
    bookMark: Number,
    bookMarkDate: Date,
    bookPages: Number,
    readStartDate: Date,
}, {
    timestamps: true
});


module.exports = mongoose.model('Book', bookSchema);