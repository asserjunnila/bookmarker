import React, { useEffect, useState } from 'react';



function BookThumb(props) {
  
  const [editable, setEditable] = useState(false)

  function setStateEditable (){
    setEditable(true)
  }

  function setStateImmutable(){
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

              <p>Book</p>
              <div class="input-group mb-3">
                {editable ? <input type="text" class="form-control" /> : <h5 className="card-title">{props.book.bookName}</h5>}
              </div>

              <p>Author</p>
              <div class="input-group mb-3">
                {editable ? <input type="text" class="form-control" /> : <p className="card-text">{props.book.bookAuthor}</p>}
              </div>

              <p>Book mark | Pages</p>
              <div class="input-group mb-3">
                {editable ? <span><input type="text" class="form-control" /> <input type="text" class="form-control" /></span> : <span><li className="list-group-item">{props.book.bookMark}</li><li className="list-group-item">{props.book.bookPages}</li></span>}
              </div>

              <p>Mark date | Start date</p>
              <div class="input-group mb-3">
                {editable ? <span><input type="text" class="form-control" /> <input type="text" class="form-control" /></span> : <span><li className="list-group-item">{props.book.bookMarkDate}</li> <li className="list-group-item">{props.book.readStartDate}</li></span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )};

export default BookThumb;