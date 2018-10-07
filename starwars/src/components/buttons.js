import React from 'react';

const Buttons = (props) => {
    return (
        <button className = {props.char.name} onClick={props.displayCharacter}>{props.char.name}</button>
    );
}

export default Buttons