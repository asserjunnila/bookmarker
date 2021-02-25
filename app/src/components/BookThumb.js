import React, { Component } from 'react';
import Modal from './Modal.js'



class BookThumb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      edit: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  showModal = () => {
    this.setState({ show: true });
    console.log("show", this.state.show)
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("hide", this.state.show)
  };

  handleClick = () => {
    this.showModal()
    console.log(this.props.book)
  };

  setEditable = () => {
    this.setState({edit: true})
  }

  setImmutable = () => {
    this.setState({edit: false})
  }

  render() {
    return (
      <div>
        <div className="col">
          <div className="card" >
            <div>
              <img src={this.props.book.bookImg} className="card-img-top" alt="..." />
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <div><p>asd</p></div>
                <p>asd</p>

              </Modal>
              <div className="edit-button">
                {!this.state.edit ? <button type="button" className="btn btn-danger" onClick={this.setEditable}>Edit</button> : <button type="button" className="btn btn-success" onClick={this.setImmutable}>Done</button> }
              </div>
            </div>
            <div className="card-body">

            <p>Book</p>
            <div class="input-group mb-3">
              {this.state.edit ? <input type="text" class="form-control"/> : <h5 className="card-title">{this.props.book.bookName}</h5> }
             </div>

             <p>Author</p>
            <div class="input-group mb-3">
                {this.state.edit ? <input type="text" class="form-control"/> : <p className="card-text">{this.props.book.bookAuthor}</p> }
            </div>



            <p>Book mark | Pages</p>
            <div class="input-group mb-3">
                {this.state.edit ? <span><input type="text" class="form-control"/> <input type="text" class="form-control"/></span> : <span><li className="list-group-item">{this.props.book.bookMark}</li><li className="list-group-item">{this.props.book.bookPages}</li></span>}
            </div>

            <p>Mark date | Start date</p>
            <div class="input-group mb-3">
              {this.state.edit ? <span><input type="text" class="form-control"/> <input type="text" class="form-control"/></span> : <span><li className="list-group-item">{this.props.book.bookMarkDate}</li> <li className="list-group-item">{this.props.book.readStartDate}</li></span>}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  };
}

export default BookThumb;