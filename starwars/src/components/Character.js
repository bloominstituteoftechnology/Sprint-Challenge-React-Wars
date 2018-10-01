import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div className="card-container">
            <div className="char-name">{props.obj.name}</div>
            <div className="char-bday">{props.obj.birth_year}</div>
            <div className="char-eye-color">{props.obj.eye_color}</div>
            <div className="char-gender">{props.obj.gender}</div>
            <div className="char-hair-color">{props.obj.hair_color}</div>
            <div className="char-height">{props.obj.height}</div>
            <div className="char-mass">{props.obj.mass}</div>
            <div className="char-skin">{props.obj.skin_color}</div>
        </div>
    )
}


export default Character;