//this component will be used to render each character card

import React from 'react';

const CharacterCard = (props) => {
    return (
        <div>
            <h1>{props.characterInfo.name}</h1>
            <ul>
                <li>Born: {props.characterInfo.birth_year}</li>
                <li>Gender: {props.characterInfo.gender}</li>
                <li>Height: {props.characterInfo.height} cm</li>
                <li>Mass: {props.characterInfo.mass}</li>
                <li>Eye color: {props.characterInfo.eye_color}</li>
                <li>Skin color: {props.characterInfo.skin_color}</li>
            </ul> 
        </div>
    )
}

export default CharacterCard;


