import React, { useState } from 'react';
//import { useEffect } from 'react';


function BookThumb(props) {

  const [bookName, setBookName] = useState(props.book.bookName);
  const [bookAuthor, setBookAuthor] = useState(props.book.bookAuthor);
  const [bookMark, setBookMark] = useState(props.book.bookMark);
  const [bookImg, setBookImg] = useState(props.book.bookImg);
  const [bookMarkDate, setBookMarkDate] = useState(props.book.bookMarkDate);
  const [bookPages, setBookPages] = useState(props.book.bookPages);
  const [readStartDate, setReadStartDate] = useState(props.book.readStartDate);



  const [editable, setEditable] = useState(false)

  function setStateEditable() {
    setEditable(true)
  }

  function setStateImmutable() {
    setEditable(false)
  }

  function removeBook(event) {

    fetch(`http://localhost:8080/book/${props.book._id}`, {
      method: 'DELETE',
      body: "body"
    }).then(response => response.json())
      .then(data => console.log(data))

    event.target.parentElement.parentElement.parentElement.remove();
    window.location.reload()
  }

  function updateBookValues() {
    setStateImmutable()
    //console.log(bookName, bookAuthor, bookMark, bookImg, bookMark, bookMarkDate, bookPages, readStartDate)

    const payload = {
      "bookName": bookName,
      "bookAuthor": bookAuthor,
      "bookImg": bookImg,
      "bookMark": bookMark,
      "bookMarkDate": bookMarkDate,
      "bookPages": bookPages,
      "readStartDate": readStartDate
    }
    fetch(`http://localhost:8080/book/${props.book._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(response => response.json())
      .then(data => console.log(data))
  }

  const handleBookNameChange = (e) => {
    setBookName(e.target.value)
  }
  const handleBookAuthorChange = (e) => {
    setBookAuthor(e.target.value)
  }
  const handleBookMarkChange = (e) => {
    setBookMark(e.target.value)
  }
  const handleBookImgChange = (e) => {
    setBookImg(e.target.value)
  }
  const handleBookMarkDateChange = (e) => {
    setBookMarkDate(e.target.value)
  }
  const handleBookPagesChange = (e) => {
    setBookPages(e.target.value)
  }
  const handleReadStartDateChange = (e) => {
    setReadStartDate(e.target.value)
  }


  return (
    <div>
      <div className="col">
        <div className="card" >
          <div>
            <img src={bookImg} className="card-img-top" alt="..." />
            <div className="edit-button">
              {!editable ? <button type="button" className="btn btn-danger" onClick={setStateEditable}>Edit</button> : <button type="button" className="btn btn-success" onClick={updateBookValues}>Done</button>}
            </div>
            {editable && <div className="remove-button"><button type="button" className="btn btn-danger" onClick={removeBook}>Remove</button></div>}
          </div>
          <div className="card-body">

            <p className="card-title">Book</p>
            <div className="input-group mb-3" >
              {editable ? <textarea className="book-name" onChange={handleBookNameChange} value={bookName}></textarea> : <h5 className="card-title">{bookName}</h5>}
            </div>

            <p className="card-title">Author</p>
            <div className="input-group mb-3">
              {editable ? <textarea className="book-author" onChange={handleBookAuthorChange} value={bookAuthor}></textarea> : <h5 className="card-text">{bookAuthor}</h5>}
            </div>

            <div className="row">
              <div className="col-6"><p className="card-title">Book mark</p></div><div className="col-6"><p className="card-title">Pages</p></div>
            </div>
            <div className="input-group mb-3">
              {editable ? <textarea onChange={handleBookMarkChange} value={bookMark}></textarea> : <textarea disabled value={bookPages}></textarea>}
              {editable ? <textarea onChange={handleBookPagesChange} value={bookPages}></textarea> : <textarea disabled value={bookMark}></textarea>}
              <div className="input-group-append">
              </div>
            </div>

            <div className="row">
              <div className="col-6 card-title"><p className="card-title"> Mark date</p></div><div className="col-6"><p className="card-title">Start date</p></div>
            </div>
            <div className="input-group mb-3">
              {editable ? <textarea onChange={handleBookMarkDateChange} value={bookMarkDate}></textarea> : <textarea disabled value={bookMarkDate}></textarea>}
              {editable ? <textarea onChange={handleReadStartDateChange} value={readStartDate}></textarea> : <textarea disabled value={readStartDate}></textarea>}
              <div className="input-group-append">
              </div>
            </div>
          </div>
        </div >
      </div>
    </div >
  )
};

export default BookThumb;