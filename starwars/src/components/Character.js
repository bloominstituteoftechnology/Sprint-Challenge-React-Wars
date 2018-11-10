import React from 'react';
import './Character.css';

const Character = props => {
    return (
        <div className="char-card">
            <div className="char-card-contents">
                <h2>{props.charOnProps.name}</h2>
                <p>Born: {props.charOnProps.birth_year}</p>
                <p>Gender: {props.charOnProps.gender}</p>
                <p>Height: {props.charOnProps.height}</p>
                <p>Mass: {props.charOnProps.mass}</p>
                <p>Skin: {props.charOnProps.skin_color}</p>
                <p>Eye: {props.charOnProps.eye_color}</p>
                <p>Hair: {props.charOnProps.hair_color}</p>
            </div>
        </div>
    )
}

export default Character;