import React from 'react';

const Character = (props) => {
    return (
        <div className="character">
            <h2>{props.character.name}</h2>
            <div className="traits">
                <p>Gender: {props.character.gender}</p>
                <p>Height: {props.character.height} cm</p>
                <p>Eye Color: {props.character.eye_color}</p>
                <p>Birth Year: {props.character.birth_year}</p>
            </div>
        </div>
    )
}

export default Character;