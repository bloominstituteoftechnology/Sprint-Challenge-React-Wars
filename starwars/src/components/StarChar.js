import React from 'react';

const StarChar = props => {
    return (
        <div>
            <h2>{props.char.name}</h2>
            <p>{props.char.mass}</p>
        </div>
    );
};

export default StarChar;