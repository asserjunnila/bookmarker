import {useEffect , useState} from 'react'
import BookThumb from './BookThumb.js'

function Books() {

  const [books, setBooks] = useState([])  

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/books')
        const json = await response.json()
        setBooks(json)
      }catch(error){
        console.error(error)
      }
    }

    fetchBooks()
  }, [])

  const bookview = books.map((book) => 
    <BookThumb book={book}></BookThumb> )

  return (
    <div className="Books">
        {bookview}
    </div>
  );
}
  
export default Books;