import React from 'react';
import './Character.css';

export const Character = (props) => {
    
    // As is clear from a quick look at the code below, each of the values associated with each of the properties provided on each 
    // character object is returned when the Character class is called, which in this case is once for each of the 10 characters
    // because of the .map function in the StarWarsCharacters Functional Component.
        return (
            <div className = "Character">
                <div className="name"><b>{props.character.name}</b></div>
                <div className="birth">Born in {props.character.birth_year}</div>
                <div className="eye_color">Eye Color: {props.character.eye_color}</div>
                <div className="gender">Gender: {props.character.gender}</div>
                <div className="hair_color">Hair Color: {props.character.hair_color}</div>
                <div className="height">Height: {props.character.height}</div>
                <div className="mass">Mass: {props.character.mass}</div>
                <div className="skin_color">Skin Color: {props.character.skin_color}</div>
            </div>
        )
};