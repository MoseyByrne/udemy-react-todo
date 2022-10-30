// this is popup text for the delete confirmation. the background for it is in ./components/Backdrop.js

function Modal() {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn-alt">Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
