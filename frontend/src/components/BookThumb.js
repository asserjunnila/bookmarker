import React, { useEffect, useState } from 'react';



function BookThumb(props) {

  const [editable, setEditable] = useState(false)

  function setStateEditable() {
    setEditable(true)
  }

  function setStateImmutable() {
    setEditable(false)
  }

  return (
    <div>
      <div className="col">
        <div className="card" >
          <div>
            <img src={props.book.bookImg} className="card-img-top" alt="..." />
            <div className="edit-button">
              {!editable ? <button type="button" className="btn btn-danger" onClick={setStateEditable}>Edit</button> : <button type="button" className="btn btn-success" onClick={setStateImmutable}>Done</button>}
            </div>
          </div>
          <div className="card-body">

            <p class="card-title">Book</p>
            <div class="input-group mb-3" >
              {editable ? <input type="text" value={props.book.bookName} class="form-control" /> : <h5 className="card-title">{props.book.bookName}</h5>}
            </div>

            <p>Author</p>
            <div class="input-group mb-3">
              {editable ? <input type="text" value={props.book.bookAuthor} class="form-control" /> : <h5 className="card-text">{props.book.bookAuthor}</h5>}
            </div>

            <div class="row">
              <div class="col-6"><p>Book mark</p></div><div class="col-6"><p>Pages</p></div>
            </div>
            <div class="input-group mb-3">
              {editable ? <input type="text" class="form-control" value={props.book.bookMark} aria-describedby="basic-addon2" /> : <input type="text" disabled class="form-control" value={props.book.bookMark} aria-describedby="basic-addon2" />}
              {editable ? <input type="text" class="form-control" value={props.book.bookPages} aria-describedby="basic-addon2" /> : <input type="text" disabled class="form-control" value={props.book.bookPages} aria-describedby="basic-addon2" />}
              <div class="input-group-append">
              </div>
            </div>

            <div class="row">
              <div class="col-6"><p><p>Mark date</p></p></div><div class="col-6"><p><p>Start date</p></p></div>
            </div>
            <div class="input-group mb-3">
              {editable ? <input type="text" class="form-control" value={props.book.bookMarkDate} aria-describedby="basic-addon2" /> : <input type="text" disabled class="form-control" value={props.book.bookMarkDate} aria-describedby="basic-addon2" />}
              {editable ? <input type="text" class="form-control" value={props.book.readStartDate} aria-describedby="basic-addon2" /> : <input type="text" disabled class="form-control" value={props.book.readStartDate} aria-describedby="basic-addon2" />}
              <div class="input-group-append">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
};

export default BookThumb;