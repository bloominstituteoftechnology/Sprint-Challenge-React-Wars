import React from 'react';

const CardInfo = (props) => {
    return (
        <div>
            <p>Gender: {props.character.gender}</p>
            <p>Height: {props.character.height}</p>
            <p>Mass: {props.character.mass}</p>
            <p>Hair Color: {props.character.hair_color}</p>
            <p>Eye Color: {props.character.eye_color}</p>
        </div>
    )
}

export default CardInfo;