import "./Modal.css";

function Modal({question, cancelButton, confirmButton}) {
  
  return (
    <>
      <div className="modal">
      <p className="modal__title">{question}</p>        
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={cancelButton}>Cancel</button>
          <button className="btn" onClick={confirmButton}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal
