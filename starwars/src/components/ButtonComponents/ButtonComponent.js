import React from 'react';
import './Button.css'

const ButtonComponent = (props) => {
    return (
        <div className="button-container">
            <input type="button" value={props.btnValue1} onClick={props.btnHandleClick1} />
            <input type="button" value={props.btnValue2} onClick={props.btnHandleClick2} />
        </div>
        
    )
}

export default ButtonComponent;