import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  function removeBook() {

    fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/books/${props.book._id}`, {
      method: 'DELETE',
      body: "body"
    }).then(response => response.json())
      .then(data => console.log(data))

    props.handleChangeOnParent()
  }

  function updateBookValues() {

    setStateImmutable()

    const payload = {
      "bookName": bookName,
      "bookAuthor": bookAuthor,
      "bookImg": bookImg,
      "bookMark": bookMark,
      "bookMarkDate": bookMarkDate,
      "bookPages": bookPages,
      "readStartDate": readStartDate
    }

    fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/books/${props.book._id}`, {
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
  const handleBookPagesChange = (e) => {
    setBookPages(e.target.value)
  }

  const handleReadStartDateChange = (e) => {
    setReadStartDate(e.target.value)
  }
  const handleBookMarkDateChange = (e) => {
    setBookMarkDate(e.target.value)
  }


  return (
    <div>
      <div>
        <div className="card">
          <div>
            <div>
              <img src={bookImg} className="card-img-top" alt="..." />
              <div className="edit-button">
                {!editable ? <button type="button" className="btn btn-danger" onClick={setStateEditable}><i className="material-icons medium">edit</i></button> : <button type="button" className="btn btn-success" onClick={updateBookValues}><i className="material-icons medium">done</i></button>}
              </div>
            </div>

            <div>
              {editable ? <textarea className="img-edit" onChange={handleBookImgChange} value={bookImg}><button></button></textarea> : <div></div>}
            </div>
            {editable && <div className="remove-button"><button type="button" className="btn btn-danger" onClick={removeBook}><i className="material-icons medium">delete</i></button></div>}
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
              <div className="row">
                <div className="col-6">
                  {editable ? <textarea onChange={handleBookMarkChange} value={bookMark}></textarea> : <textarea disabled value={bookMark}></textarea>}
                </div>
                <div className="col-6">
                  {editable ? <textarea onChange={handleBookPagesChange} value={bookPages}></textarea> : <textarea disabled value={bookPages}></textarea>}
                </div>
              </div>
              <div className="input-group-append">
              </div>
            </div>

            <div className="row">
              <div className="col-6 card-title"><p className="card-title"> Mark date</p></div><div className="col-6"><p className="card-title">Start date</p></div>
            </div>
            <div className="input-group mb-3">
              <div className="row">
                <div className="col-6">
                  {editable ? <DatePicker selected={new Date()} className="datepicker" popperPlacement="top-end" showWeekNumbers></DatePicker> : <DatePicker className="datepicker" disabled></DatePicker>}
                </div>
                <div className="col-6">
                  {editable ? <DatePicker selected={new Date()} className="datepicker" popperPlacement="top-end" showWeekNumbers></DatePicker> : <DatePicker className="datepicker" disabled></DatePicker>}
                </div>
              </div>
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