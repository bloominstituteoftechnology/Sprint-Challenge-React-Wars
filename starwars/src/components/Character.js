import React from 'react';
import './Character.css';

const Character = props => {
    return(
        <div className="characterCard">
            <h2>{props.Character.name}</h2>
            <p>{`Birth Year: ${props.Character.birth_year}`}</p>
            <p>{`Gender: ${props.Character.gender}`}</p>
            <p>{`Height: ${props.Character.height}`}</p>
            <p>{`Mass: ${props.Character.mass}`}</p>
            <p>{`Eye Color: ${props.Character.eye_color}`}</p>
            <p>{`Hair Color: ${props.Character.hair_color}`}</p>
            <p>{`Skin Color: ${props.Character.skin_color}`}</p>
        </div>
        
    );
};

export default Character; 