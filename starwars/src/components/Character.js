import React from 'react';

import './StarWars.css';

const Character = props => {
    return (
        <div 
            // className={props.todo.completed ? 'completed todo-list' : 'todo-list'}
            // onClick={()=> props.toggleCompleted(props.todo.id)}
            // id={props.todo.display ? null : 'display-none'}
            className="character-list__character"
        >
        <h4>Character Card</h4>
         <div className="character-list__character-- name">
            <p className="display-title">Name: </p>
            <p className="display-value">{props.character.name}</p>
         </div>
         <div className="character-list__character-- birth-year">
            <p className="display-title">Birth:</p> 
            <p className="display-value">{props.character.birth_year}</p>
         </div>
         <div className="character-list__character-- gender">
            <p className="display-title">Gender: </p>
            <p className="display-value">{props.character.gender}</p>
         </div>
         <div className="character-list__character-- eye-color">
            <p className="display-title">Eye Color:</p>
            <p className="display-value" style={{ color : props.character.eye_color }}> {props.character.eye_color}</p>
         </div>
         <div className="character-list__character-- hair-color">
            <p className="display-title">Hair Color:</p> 
            <p className="display-value" style={{ color : props.character.hair_color }}> {props.character.hair_color}</p>
         </div>
         <div className="character-list__character-- skin-color">
            <p className="display-title">Skin Color:</p> 
            <p className="display-value" style={{ color : props.character.skin_color }}> {props.character.skin_color}</p>
         </div>
         <div className="character-list__character-- height">
            <p className="display-title">Height: </p> 
            <p className="display-value">{props.character.height}</p>
         </div>
         <div className="character-list__character-- weight">
            <p className="display-title">Weight: </p> 
            <p className="display-value">{props.character.mass}</p>
         </div>
        </div>
    );
}

export default Character;