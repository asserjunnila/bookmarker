import 'materialize-css';
import { Row,} from 'react-materialize';

import BookThumb from "./BookThumb";

function Books() {
  const books = [
    {
      "name":"book1", 
      "author":"author1",
      "img": "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
    }, 
    {
      "name":"book2", 
      "author":"author1",
      "img": "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
    },
    {
      "name":"book2", 
      "author":"author1",
      "img": "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
    },
    {
      "name":"book2", 
      "author":"author1",
      "img": "https://edit.org/images/cat/book-covers-big-2019101610.jpg"
    },
  ]
  const bookview = books.map((book) => 
    <BookThumb name={book.name} author={book.author} img={book.img}></BookThumb>);
    return (
      <div>
        <Row>
        {bookview}
        </Row>
      </div>
    );
  }
  
  export default Books;