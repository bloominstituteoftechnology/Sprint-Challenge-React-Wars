import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.displayCard}>{props.name}</button>
        </div>
    )
}

export default Button