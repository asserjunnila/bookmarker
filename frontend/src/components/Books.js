import { useEffect, useState } from 'react'
import BookThumb from './BookThumb.js'

function Books() {

  const [books, setBooks] = useState([])
  // let bookview = []
  useEffect(() => {
    const fetchBooks = async () => {
      try {



        const response = await fetch('http://localhost:8080/books')
        const json = await response.json()
        //  await json.forEach(book => {
        //  bookview.push(
        //  <BookThumb book={book}></BookThumb>
        //  )})
        //)
        //}) 
        //
        // setBooks(bookview)
        setBooks(json)
      } catch (error) {
        console.error(error)
      }
    }

    fetchBooks()
  }, [])

  let bookview = [];
  if (books.books) {
    books.books.forEach(book => {
      bookview.push(
        <BookThumb key={book._id} book={book}></BookThumb>
      )
    })
  }

  //const bookview = books.map((book) => 
  //  <BookThumb book={book}></BookThumb> )

  function addBook() {
    // API call for creating a new book

  }


  return (
    <div className="container">
      <div className="add-button">
        <button type="button" onClick={addBook} className="btn btn-primary">Add book</button>
      </div>
      <div className="d-flex flex-row flex-wrap my-flex-container container-fluid">
        {bookview}
      </div>
    </div>
  );
}

export default Books;