import React from 'react';
import './StarWars.css';

const Character = (props) => {
    return (
        <div className="card-container">
            <h1>Lets find out about {props.obj.name}!</h1>
            <div className="attributes">
                <div className="char-name atrribute">{props.obj.name}</div>
                <div className="char-bday atrribute">DOB: {props.obj.birth_year}</div>
                <div className="char-eye-color atrribute">Eye Color: {props.obj.eye_color}</div>
                <div className="char-gender atrribute">Gender: {props.obj.gender}</div>
                <div className="char-hair-color atrribute">Hair Color: {props.obj.hair_color}</div>
                <div className="char-height atrribute">Height: {props.obj.height}</div>
                <div className="char-mass atrribute">Mass: {props.obj.mass}</div>
                <div className="char-skin atrribute">Skin Type: {props.obj.skin_color}</div>
            </div>
        </div>
    )
}


export default Character;