import classes from './Modal.module.css';
import React, { Fragment } from 'react'; //for fragments usage
import ReactDOM from 'react-dom'; //for REACT_PORTALs to make portal for overlay



/////THIS IS BACKDROP component that hides the overlay on closing
const BackDrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onClose}></div>
}

//////This is the Modal overlay component which displays the OVERLAY window
//////when the cart button is pressed!!!
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}
            </div>
        </div> 
    );
}
const portalElement = document.getElementById('overlays'); //portal helper element to create portal(path) to specific div='overlay'

const Modal = (props) => {
    
    return (
        <Fragment>
           {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,portalElement)} 
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}  
        </Fragment>
    );
}

export default Modal;