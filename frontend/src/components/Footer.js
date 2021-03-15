import { useState } from "react";

function Footer() {

  const sentences = [
    'Ootsä nähny miten Chuck Norris potkii?',
    'Har du sett hur Chuck Norris sparkar?', // Ruotsi
    '¿Has visto cómo patea Chuck Norris?',  //Espanja
    'Heb je gezien hoe Chuck Norris trapt?', // Hollanti
    'Kas olete näinud, kuidas Chuck Norris peksab?' // Viro
  ]

  const [sentence, setSentence] = useState(sentences[Math.floor(Math.random() * sentences.length)])


  return (
    <div className="footer">
      <h6>{sentence}</h6>
    </div>
  );
}

export default Footer
