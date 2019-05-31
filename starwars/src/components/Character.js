import React from 'react';
import './Character.css';

const Character = props => {
    return (
        <div className="MainChar">
            <h1 className="MainName">{props.characterData.name}</h1>
            <p className="MainStat">Birth Year: {props.characterData.birth_year}</p>
            <p className="MainStat">Eye Color:{props.characterData.eye_color}</p>
            <p className="MainStat">Gender:{props.characterData.gender}</p>
            <p className="MainStat">Mass:{props.characterData.mass}</p>
        </div>
    );
};

export default Character;