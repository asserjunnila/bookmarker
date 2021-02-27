import { useEffect, useState } from 'react'
import BookThumb from './BookThumb.js'

function Books() {
  const [books, setBooks] = useState([])
  const [update, setUpdate] = useState(true)
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/books`)
        const json = await response.json()
        setBooks(json.books);
      } catch (error) {
        console.error(error)
        setHasError(true)
      }
    }
    fetchBooks()
  }, [update])

  const handleChangeOnParent = () => {
    setUpdate(!update);
  }
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
    fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/books/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(response => response.json())
      .then(data => console.log(data))

    handleChangeOnParent()
  }

  return (
    <div className="container">
      <div className="add-button">
        <button type="button" onClick={addBook} className="btn btn-primary"><i className="material-icons medium">add_circle_outline</i></button>
      </div>
      <div className="d-flex flex-row flex-wrap my-flex-container container-fluid">
        {hasError ? <div>Error occured.</div> : (books.map(book => (<BookThumb handleChangeOnParent={handleChangeOnParent} key={book._id} book={book} ></BookThumb>)))}
      </div>
    </div>
  );
}

export default Books