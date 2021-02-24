import './App.css';
import './components/Books.js'
import Books from './components/Books.js';
import 'materialize-css';
import { Row, Col, Container } from 'react-materialize';



function App() {
  return (
    <div>
      <Container>
      <Books></Books>
      </Container>
        
         
      
    </div>
  );
}

export default App;
