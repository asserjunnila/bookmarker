import 'materialize-css';
import {Button, Col, Row, TextInput, DatePicker, Modal } from 'react-materialize';
import {useEffect, useState} from 'react'


function BookView(props) {

    const [bookName, setBookName] = useState(props.book.bookName)
    const [bookAuthor, setBookAuthor] = useState(props.book.bookAuthor)
    const [readStartDate, setReadStartDate] = useState(props.book.readStartDate)
    const [bookMark, setBookMark] = useState(props.book.bookMark)
    const [bookMarkDate, setBookMarkDate] = useState(props.book.bookMarkDate)
    const [bookPages, setBookPages] = useState(props.book.bookPages)
    const [bookImg, setBookImg] = useState(props.book.bookImg)

    
    useEffect(() => {
      console.log(bookName, bookAuthor, readStartDate, bookMark, bookMarkDate, bookPages, bookImg);
    })

    function updateBook(){

      var body = {
        "bookName": bookName,
        "bookAuthor": bookAuthor,
        "bookImg": bookImg,
        "bookMark": bookMark.toString(),
        "bookMarkDate": bookMarkDate,
        "bookPages": bookPages.toString(),
        "readStartDate": readStartDate
    }

    console.log(body)


      // fetch post
      fetch('http://localhost:8080/books/'+props.book._id, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json)
      
    }

    function insertBook(){
      var body = {
        "bookName": bookName,
        "bookAuthor": bookAuthor,
        "bookImg": "https://kbimages1-a.akamaihd.net/f16e3461-030b-41c0-aed5-03e1a54c3dea/1200/1200/False/design-a-book-cover.jpg",
        "bookMark": bookMark.toString(),
        "bookMarkDate": bookMarkDate,
        "bookPages": bookPages.toString(),
        "readStartDate": readStartDate
    }


      // fetch post
      fetch('http://localhost:8080/books/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json)
      
    }

    function deleteBook(){
      var body = {
        "bookName": bookName,
        "bookAuthor": bookAuthor,
        "bookImg": "https://kbimages1-a.akamaihd.net/f16e3461-030b-41c0-aed5-03e1a54c3dea/1200/1200/False/design-a-book-cover.jpg",
        "bookMark": bookMark.toString(),
        "bookMarkDate": bookMarkDate,
        "bookPages": bookPages.toString(),
        "readStartDate": readStartDate
    }

      // fetch post
      fetch('http://localhost:8080/books/'+props.book._id, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json)
      


    }

    function updateBookName(events){
      setBookName(events.target.value)
    }

    function updateBookAuthor(events) {
      setBookAuthor(events.target.value)
    }

    function updateReadStartDate(events) {
      setReadStartDate(events.toString())
    }

    function updateBookMark(events) {
      setBookMark(events.target.value)
    }

    function updateBookMarkDate(events) {
      setBookMarkDate(events.toString())
    }

    function updateBookPages(events) {
      setBookPages(events.target.value)
    }

    function updateBookImg(events) {
      setBookImg(events.target.value)
    }

    return (
      <div>
        <Row>
        <Col s={4} m={4}>
        <div>
  <Button
    className="modal-trigger"
    href="#modal2"
    node="button"
  >
     Update cover 
  </Button>
  <Modal
    actions={[
      <Button flat modal="close" node="button" waves="green">Close</Button>
    ]}
    bottomSheet={false}
    fixedFooter={false}
    header="Update book cover"
    id="modal2"
    open={false}
    options={{
      dismissible: true,
      endingTop: '10%',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      opacity: 0.5,
      outDuration: 250,
      preventScrolling: true,
      startingTop: '4%'
    }}
  >
    <TextInput id="img-input" onChange={updateBookImg} defaultValue={bookImg}></TextInput>
    <img alt="img" src={bookImg}></img>
  </Modal>
</div>  
        <img alt="img" src={bookImg}></img>

        </Col>

        <Col s={8} m={8}>
        <Row>
          <Col s={6} m={6}>
          <p>Book name</p>
          <TextInput onChange={updateBookName} id="text1" defaultValue={bookName}></TextInput>
          </Col>
          <Col s={6} m={6}>
          <p>Book author</p>
          <TextInput onChange={updateBookAuthor} id="text2" defaultValue={bookAuthor}></TextInput>
          </Col>
          <Col s={6} m={6}>
          <p>Read start date</p>
          <DatePicker onChange={updateReadStartDate} defaultValue={readStartDate}
  id="date1"
  options={{
    autoClose: true,
    container: null,
    defaultDate: null,
    disableDayFn: null,
    disableWeekends: false,
    events: [],
    firstDay: 0,
    format: 'yyyy-mm-dd',
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      nextMonth: '›',
      previousMonth: '‹',
      weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      weekdaysAbbrev: [
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ],
      weekdaysShort: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ]
    },
    isRTL: false,
    maxDate: null,
    minDate: null,
    onClose: null,
    onDraw: null,
    onOpen: null,
    onSelect: null,
    parse: null,
    setDefaultDate: false,
    showClearBtn: false,
    showDaysInNextAndPreviousMonths: false,
    showMonthAfterYear: false,
    yearRange: 10
  }}
/>
          </Col>
          <Col s={6} m={6}>
          <p>Book mark</p>
        <TextInput id="text3" onChange={updateBookMark} defaultValue={bookMark}></TextInput>
          </Col>
          <Col s={6} m={6}>
          <p>Book mark date</p>
        <DatePicker id="date2" onChange={updateBookMarkDate} defaultValue={bookMarkDate} options={{
          autoClose: true,
          container: false,
          defaultDate: true,
          disableDayFn: null,
          disableWeekends: false,
          events: [],
          firstDay: 0,
          format: 'yyyy-mm-dd',
          i18n: {
            cancel: 'Cancel',
            clear: 'Clear',
            done: 'Ok',
            months: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'
            ],
            monthsShort: [
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
              '12'
            ],
            nextMonth: '›',
            previousMonth: '‹',
            weekdays: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            weekdaysAbbrev: [
              'M',
              'T',
              'W',
              'T',
              'F',
              'S',
              'S'
            ],
            weekdaysShort: [
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
              'Sun'
            ]
          },
          isRTL: false,
          maxDate: null,
          minDate: null,
          onClose: null,
          onDraw: null,
          onOpen: null,
          onSelect: null,
          parse: null,
          setDefaultDate: true,
          showClearBtn: false,
          showDaysInNextAndPreviousMonths: false,
          showMonthAfterYear: false,
          yearRange: 10
        }}
        />

          </Col>
          <Col s={6} m={6}>
          <p>Book pages</p>
        <TextInput id="text4" onChange={updateBookPages} defaultValue={bookPages}></TextInput>

          </Col>

        </Row>

        </Col>

        </Row>
        
        
        
        
        
       
      
        {props.bookId==="" ? <Button onClick={insertBook}>add</Button> : <div><Button onClick={updateBook}>update</Button><Button onClick={deleteBook}>delete</Button></div>}
      </div>
    );
  }
  
  export default BookView;