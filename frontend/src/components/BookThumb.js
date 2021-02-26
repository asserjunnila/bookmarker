import React, { useState } from 'react';
//import { useEffect } from 'react';

function BookThumb(props) {

  const [ bookName, setBookName ] = useState(props.book.bookName);
  const [ bookAuthor, setBookAuthor ] = useState(props.book.bookAuthor);
  const [ bookMark, setBookMark ] = useState(props.book.bookMark);
  const [ bookImg, setBookImg ] = useState(props.book.bookImg);
  const [ bookMarkDate, setBookMarkDate ] = useState(props.book.bookMarkDate);
  const [ bookPages, setBookPages ] = useState(props.book.bookPages);
  const [ readStartDate, setReadStartDate ] = useState(props.book.readStartDate);



  const [ editable, setEditable ] = useState(false)

  function setStateEditable() {
    setEditable(true)
  }

  function setStateImmutable() {
    setEditable(false)
  }

  function removeBook(event) {

    fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/book/${props.book._id}`, {
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


    fetch(`http://localhost:${process.env.REACT_APP_BACKPORT}/book/${props.book._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(response => response.json())
      .then(data => console.log("CICCELI", data))

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
              {editable ? <input type="text" placeholder={bookName} onChange={console.log(Event)} className="form-control" /> : <h5 className="card-title">{bookName}</h5>}
            </div>

            <p className="card-title">Author</p>
            <div className="input-group mb-3">
              {editable ? <input type="text" placeholder={bookAuthor} className="form-control" /> : <h5 className="card-text">{bookAuthor}</h5>}
            </div>

            <div className="row">
              <div className="col-6"><p className="card-title">Book mark</p></div><div className="col-6"><p className="card-title">Pages</p></div>
            </div>
            <div className="input-group mb-3">
              {editable ? <input type="text" className="form-control" placeholder={bookMark} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={bookMark} aria-describedby="basic-addon2" />}
              {editable ? <input type="text" className="form-control" placeholder={bookPages} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={bookPages} aria-describedby="basic-addon2" />}
              <div className="input-group-append">
              </div>
            </div>

            <div className="row">
              <div className="col-6 card-title"><p className="card-title"> Mark date</p></div><div className="col-6"><p className="card-title">Start date</p></div>
            </div>
            <div className="input-group mb-3">
              {editable ? <input type="text" className="form-control" placeholder={bookMarkDate} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={bookMarkDate} aria-describedby="basic-addon2" />}
              {editable ? <input type="text" className="form-control" placeholder={readStartDate} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={readStartDate} aria-describedby="basic-addon2" />}
              <div className="input-group-append">
              </div>
              <div className="card-body">

                <p className="card-title">Book</p>
                <div className="input-group mb-3" >
                  {editable ? <input type="text" placeholder={bookName} className="form-control" /> : <h5 className="card-title">{bookName}</h5>}
                </div>

                <p className="card-title">Author</p>
                <div className="input-group mb-3">
                  {editable ? <input type="text" placeholder={bookAuthor} className="form-control" /> : <h5 className="card-text">{bookAuthor}</h5>}
                </div>

                <div className="row">
                  <div className="col-6"><p className="card-title">Book mark</p></div><div className="col-6"><p className="card-title">Pages</p></div>
                </div>
                <div className="input-group mb-3">
                  {editable ? <input type="text" className="form-control" placeholder={bookMark} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={bookMark} aria-describedby="basic-addon2" />}
                  {editable ? <input type="text" className="form-control" placeholder={bookPages} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={bookPages} aria-describedby="basic-addon2" />}
                  <div className="input-group-append">
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 card-title"><p className="card-title"> Mark date</p></div><div className="col-6"><p className="card-title">Start date</p></div>
                </div>
                <div className="input-group mb-3">
                  {editable ? <input type="text" className="form-control" placeholder={bookMarkDate} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={bookMarkDate} aria-describedby="basic-addon2" />}
                  {editable ? <input type="text" className="form-control" placeholder={readStartDate} aria-describedby="basic-addon2" /> : <input type="text" disabled className="form-control" placeholder={readStartDate} aria-describedby="basic-addon2" />}
                  <div className="input-group-append">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div>
    </div>
  )
};

export default BookThumb;