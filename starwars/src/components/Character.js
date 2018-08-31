import React from 'react';

function Character(props) {
    return(
        <div>
            {props.character.name}
            {props.character.height}
            {props.character.mass}
            {props.character.hair_color}
            {props.character.skin_color}
            {props.character.eye_color}
            {props.character.birth_year}
            {props.character.gender}
        </div>
    );
};

export default Character;