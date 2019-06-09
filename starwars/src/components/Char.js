import React from 'react';


const Char = props => {
    return <div className="card">
        <p>Name: {props.swChar.name} </p>
        <p>Height: {props.swChar.height} </p>
        <p>Gender: {props.swChar.gender} </p>
        <p>Birth Year: {props.swChar.birth_year}</p>
        </div>;
};

export default Char;