import './App.css';
import './components/Books.js'
import Books from './components/Books.js';
import BookView from './components/BookView.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Books></Books>
      <BookView></BookView>
      </header>
    </div>
  );
}

export default App;
