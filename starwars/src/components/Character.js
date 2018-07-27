import React from 'react';

const Character = props => {
    return(
        <div className = "char-card">
            <h4>Name: {props.name}</h4>
            <p>Born: {props.born} Gender: {props.gender}</p>           
        </div>
    )
}

export default Character