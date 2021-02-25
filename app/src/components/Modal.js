

const Modal = ({ handleClose, show, children }) => {
  let showHideClassName = show ? 'display-block modal' : 'modal display-none';
  console.log(showHideClassName)

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="row">
          <div className="col kuva">


          </div>
          <div className="col text inputs" >

          </div>
        </div>
        {children}
        <button onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal;