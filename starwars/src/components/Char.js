import React from 'react';


const Char = props => {
    return (
        <div>
            <div>{props.char.name}</div>
            <div>{props.char.birth_year}</div>
            <div>{props.char.eye_color}</div>
            <div>{props.char.gender}</div>
        </div>
    );
};

export default Char;