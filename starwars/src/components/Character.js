import React from 'react';
//import './Character.css';


function Character(props) {
    return (
    <div className="character-component">
        <h2>{props.character.name}</h2>
        <h3>{props.character.birth_year}</h3>
    </div>
    );
}

export default Character;