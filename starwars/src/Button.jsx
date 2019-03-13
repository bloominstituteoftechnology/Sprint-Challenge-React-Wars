import React from 'react';
import './starwars.css';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.prev}>Prev</button>
            <button onClick={props.next}>Next</button>
        </div>
    )
}

export default Button