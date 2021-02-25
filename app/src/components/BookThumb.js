import {useEffect, useState} from 'react'

import BookView from './BookView.js'


function BookThumb(props) {
  
  return (

    <div class="row">
      <div class="col-sm-4">
      <div class="card">
        <img src="https://kbimages1-a.akamaihd.net/f16e3461-030b-41c0-aed5-03e1a54c3dea/1200/1200/False/design-a-book-cover.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.book.bookName}</h5>
          <p class="card-text">{props.book.bookAuthor}</p>
        </div>
        <div class="row">
          <div class="col-sm">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{props.book.bookMark}</li>
              <li class="list-group-item">{props.book.bookMarkDate}</li>
              <li class="list-group-item">{props.book.readStartDate}</li>
            </ul>
          </div>
          <div class="col-sm">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{props.book.bookPages}</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
          <div class="col-sm">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
    );
  }
  
  export default BookThumb;