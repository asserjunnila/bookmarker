import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function BookThumb(props) {

  const [bookName, setBookName] = useState(props.book.bookName);
  const [bookAuthor, setBookAuthor] = useState(props.book.bookAuthor);
  const [bookMark, setBookMark] = useState(parseInt(props.book.bookMark));
  const [bookImg, setBookImg] = useState(props.book.bookImg);
  const [bookMarkDate, setBookMarkDate] = useState(new Date(props.book.bookMarkDate));
  const [bookPages, setBookPages] = useState(parseInt(props.book.bookPages));
  const [readStartDate, setReadStartDate] = useState(new Date(props.book.readStartDate));

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
    }).then(response => response.json()).catch(err => console.error(err))

    props.handleChangeOnParent()
  }

  function updateBookValues() {

    setStateImmutable()

    console.log("before setting", typeof bookMark, typeof bookPages)

    setBookMark((bookMark === null || isNaN(parseInt(bookPages))) ? 1 : parseInt(bookMark))
    setBookPages((bookPages === null || isNaN(parseInt(bookMark))) ? 1 : parseInt(bookPages))

    const payload = {
      "bookName": bookName,
      "bookAuthor": bookAuthor,
      "bookImg": bookImg,
      "bookMark": (bookMark == null || isNaN(parseInt(bookMark))) ? 1 : parseInt(bookMark),
      "bookMarkDate": bookMarkDate,
      "bookPages": (bookPages == null || isNaN(parseInt(bookPages))) ? 1 : parseInt(bookPages),
      "readStartDate": readStartDate
    }


    fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/books/${props.book._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(response => response.json())
      .catch(err => console.error(err))

  }

  const handleBookNameChange = (e) => {
    setBookName(e.target.value)
  }
  const handleBookAuthorChange = (e) => {
    setBookAuthor(e.target.value)
  }
  const handleBookMarkChange = (e) => {
    setBookMark(e.target.value > 0 ? e.target.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1') : '')
  }
  const handleBookImgChange = (e) => {
    setBookImg(e.target.value)
  }
  const handleBookPagesChange = (e) => {
    setBookPages(e.target.value > 0 ? e.target.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1') : '')
  }

  const handleReadStartDateChange = (e) => {
    setReadStartDate(e)
  }
  const handleBookMarkDateChange = (e) => {
    setBookMarkDate(e)
  }

  return (

    <div className="card">
      <div>
        <div>
          <div className="img-container">
            <img src={bookImg} style={{ opacity: editable ? 0.5 : 1 }} className="card-img-top" alt="..." />
          </div>
          <div className="edit-button">
            {!editable ? <button type="button" className="btn btn-light" onClick={setStateEditable}><i className="material-icons medium">edit</i></button> : <button type="button" className="btn btn-success" onClick={updateBookValues}><i className="material-icons medium">done</i></button>}
          </div>
        </div>

        <div>
          {editable ? <textarea className="img-edit" onChange={handleBookImgChange} value={bookImg}><button></button></textarea> : <div></div>}
        </div>
        {editable && <div className="remove-button"><button type="button" className="btn btn-danger" onClick={removeBook}><i className="material-icons medium">delete</i></button></div>}
      </div>
      <div className="card-body">

        <label className="card-title">Book</label>
        <div className="input-group mb-3" >
          {editable ? <textarea className="book-name" onChange={handleBookNameChange} value={bookName}></textarea> : <h5 className="card-title">{bookName}</h5>}
        </div>

        <label className="card-title">Author</label>
        <div className="input-group mb-3">
          {editable ? <textarea className="book-author" onChange={handleBookAuthorChange} value={bookAuthor}></textarea> : <h5 className="card-text">{bookAuthor}</h5>}
        </div>

        <div className="circular-progress-bar">
          <CircularProgressbar
            value={parseInt(bookMark) + parseInt(bookPages) !== 2 ? (parseInt(bookMark) / parseInt(bookPages) * 100).toFixed(0) : 0}
            text={`${(parseInt(bookMark) + parseInt(bookPages) !== 2 ? (parseInt(bookMark) / parseInt(bookPages) * 100).toFixed(0) : 0)} % `}
            strokeWidth={5}
            styles={buildStyles({
              trokeLinecap: "butt",
              pathColor: "#025AA5"
            })}
          />
        </div>

        <div className="row">
          <div className="col-6"><label className="card-title">Book mark</label></div><div className="col-6"><label className="card-title">Pages</label></div>
        </div>
        <div className="input-group mb-3">
          <div className="row">
            <div className="col-6">
              {editable ? <textarea type="number" onChange={handleBookMarkChange} value={bookMark}></textarea> : <textarea disabled value={bookMark}></textarea>}
            </div>
            <div className="col-6">
              {editable ? <textarea type="number" onChange={handleBookPagesChange} value={bookPages}></textarea> : <textarea disabled value={bookPages}></textarea>}
            </div>
          </div>
          <div className="input-group-append">
          </div>
        </div>

        <div className="row">
          <div className="col-6 card-title"><label className="card-title"> Mark date</label></div><div className="col-6"><label className="card-title">Start date</label></div>
        </div>
        <div className="input-group mb-3">
          <div className="row">
            <div className="col-6">
              {editable ? <DatePicker selected={bookMarkDate} onChange={handleBookMarkDateChange} className="datepicker" popperPlacement="top-end" showWeekNumbers></DatePicker> : <DatePicker className="datepicker" selected={bookMarkDate} disabled></DatePicker>}
            </div>
            <div className="col-6">
              {editable ? <DatePicker selected={readStartDate} onChange={handleReadStartDateChange} className="datepicker" popperPlacement="top-end" showWeekNumbers></DatePicker> : <DatePicker className="datepicker" selected={readStartDate} disabled></DatePicker>}
            </div>
          </div>
          <div className="input-group-append">
          </div>
        </div>
      </div>
    </div >

  )
};

export default BookThumb