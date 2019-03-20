import './modalStyle.css'
import React from 'react';


 const Modal = ({ handleClose, show, children }) => {
	  //const  showHideClassName = show ? "modal display-block" : "modal display-none";

	  return (
		<div className={show ? "modal display-block" : "modal display-none"}>
		  <section className="modal-main">
			{children}
		  </section>
		</div>
	  );
};

export default Modal;