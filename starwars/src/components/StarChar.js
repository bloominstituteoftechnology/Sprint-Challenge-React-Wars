import React from 'react';

const StarChar = props => {
    return (
        <div>
            <h2>Name: {props.char.name}</h2>
            <p>Height: {props.char.height}</p>
        </div>
    );
};

export default StarChar;