import React from 'react';

const StarChar = props => {
    return (
        <div>
            <div>{props.char.name}</div>
            <div>{props.char.height}</div>
        </div>
    );
};

export default StarChar;