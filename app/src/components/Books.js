import 'materialize-css';
import { Row, Button, Icon, Modal} from 'react-materialize';
import {useEffect, useState} from "react"
import BookThumb from "./BookThumb";
import BookView from './BookView';

const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/books')
        const json = await response.json()
        setBooks(json)
        
      } catch (error) {
        console.error(error)
      }
    }

    fetchBooks()
  }, []);


  const bookview = books.map((book) => 
    <BookThumb book={book}></BookThumb>);
    
    return (
      <div>


        <Modal
            actions={[
                <Button 
                flat modal="close" 
                node="button" 
                waves="red">Close
                </Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            id="Modal-0"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%',
                
            }}
            trigger={
            
              <Button
              className="red"
              fab={{
              direction: 'bottom'
              }}
              floating
              large
              node="button"
              style={{
              top: '50px'
              }}
              icon={<Icon>add</Icon>}
              ></Button>
            
            }
            >
            <BookView book={""}></BookView>
            </Modal>

        <Row>

        {bookview}


        <div>

</div>



        </Row>
      </div>
    );
  }
  
  export default Books;