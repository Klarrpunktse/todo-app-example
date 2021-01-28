import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  // to see modal first use classname  show-modal

  return (
    <div className={`modal-overlay`}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
