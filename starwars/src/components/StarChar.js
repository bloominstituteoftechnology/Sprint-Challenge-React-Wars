import React from 'react';

const StarChar = props => {
    return (
        <div>
            <div>{props.char.name}</div>
            <div>{props.char.gender}</div>
        </div>
    );
};

export default StarChar;