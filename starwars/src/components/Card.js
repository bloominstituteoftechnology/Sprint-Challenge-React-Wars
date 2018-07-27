import React from 'react';

const Card = props => {
    return (
        <div>{props.name}
            <div>Birthdate: {props.birth_year}</div>
            <div>Gender: {props.gender}</div>
            <div>Height: {props.height}</div>
            <div>Mass: {props.mass}</div>
        </div>

    )
}

export default Card;