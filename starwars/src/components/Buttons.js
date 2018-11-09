import React from 'react';

const Buttons = (props) =>{
    return(
        <button className = {props.className} onClick={()=> props.previous == null ? alert('beginning of page') : props.clickHandler(props.previous)}>Go Back</button>
        
    );
}
export default Buttons;