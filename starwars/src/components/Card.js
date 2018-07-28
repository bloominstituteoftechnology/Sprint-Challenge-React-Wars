import React from 'react';

const Card = props => {
    return (
        <div>
            <div>Name: {props.card.name}</div>
            <div>Birthdate: {props.card.birth_year}</div>
            <div>Gender: {props.card.gender}</div>
            <div>Height: {props.card.height}</div>
            <div>Mass: {props.card.mass}</div>
        </div>

    )
}

export default Card;