import { useEffect, useState } from 'react'
import BookThumb from './BookThumb.js'

function Books() {


  const [ books, setBooks ] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {



        const response = await fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/books`)

        const json = await response.json()
        setBooks(json)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks()
  }, [])

  const bookview = [];
  if (books.books) {
    books.books.forEach(book => {
      bookview.push(
        <BookThumb key={book._id} book={book}></BookThumb>
      )
    })
  }



  /*
  useEffect(() => {
    try {
      fetch('http://localhost:8080/books')
        .then(json => json.json())
        .then(data => setBooks(data))


      books.books.forEach(book => {
        bookview.push(
          <BookThumb key={book._id} book={book}></BookThumb>
        )
      })

      setBooksAsElements(bookview)
    } catch (error) {
      console.error(error)
    }
  }, booksAsElements)

*/

  const addBook = () => {
    // API call for creating a new book
    const payload = {
      "bookName": "bookName",
      "bookAuthor": "bookAuthor",
      "bookImg": "http://www.elizabethlawchambers.com/wp-content/uploads/2019/02/Placeholder-500x500.jpg",
      "bookMark": 1,
      "bookMarkDate": new Date(),
      "bookPages": 1,
      "readStartDate": new Date()
    }
    fetch(`http://localhost:8080/book/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(response => response.json())
      .then(data => console.log(data))
    //window.location.reload()
  }

  return (
    <div className="container">
      <div className="add-button">
        <button type="button" onClick={addBook} className="btn btn-primary"><i className="material-icons medium">add_circle_outline</i></button>
      </div>
      <div className="d-flex flex-row flex-wrap my-flex-container container-fluid">
        {bookview}
      </div>
    </div>
  );
}

export default Books