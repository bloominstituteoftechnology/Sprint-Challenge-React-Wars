import React from 'react';
import InfoCards from './InfoCards';

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="char-name">{props.Character.name}</div>
            <div className="char-birth">{props.Character.birth_year}</div>
            <div className="char-eye">{props.Character.eye_color}</div>
            <div className="char-gender">{props.Character.gender}</div>
            <div className="char-hair">{props.Character.hair_color}</div>
            <div className="char-height">{props.Character.height}</div>
            <div className="char-mass">{props.Character.mass}</div>
            <div className="char-skin">{props.Character.skin_color}</div>
        </div>
    )
}

export default Card;