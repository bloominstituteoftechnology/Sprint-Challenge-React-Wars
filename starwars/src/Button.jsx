import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.displayCard}>Prev</button>
            <button onClick={props.displayCard}>Next</button>
        </div>
    )
}

export default Button