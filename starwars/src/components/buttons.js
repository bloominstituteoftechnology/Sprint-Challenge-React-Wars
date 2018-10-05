import React from 'react';

const Buttons = (props) => {
    return (
        <button onClick={props.displayCharacter}>{props.char.name}</button>
    );
}

export default Buttons