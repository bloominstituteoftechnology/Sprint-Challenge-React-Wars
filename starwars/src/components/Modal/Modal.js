

//== Modal Component ===========================================================

//-- Dependencies --------------------------------
import React from 'react';
import './Modal.css';

//-- Implementation ------------------------------
class Modal extends React.Component {

    doNothing = event => event.preventDefault();
    //-- Rendering - only render current tab ---------
    render = () => {
        return (
            <div onClick={this.props.close} className="modal-container">
                <div onClick={this.doNothing} className="modal-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

//-- Export --------------------------------------
export default Modal;
