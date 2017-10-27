import React from 'react';
import './Character.css';

const Character = (props) => {
    return (<div className='Card'>
                <h2>{props.character.name}</h2>
                    <div className='Card-container'>
                        <h3><span>height:</span> {props.character.height}</h3>
                        <h3><span>mass:</span> {props.character.mass}</h3>
                        <h3><span>hair_color:</span> {props.character.hair_color}</h3>
                        <h3><span>skin_color:</span> {props.character.skin_color}</h3>
                        <h3><span>eye_color:</span> {props.character.eye_color}</h3>
                        <h3><span>birth_year:</span> {props.character.birth_year}</h3>
                        <h3><span>gender:</span> {props.character.gender}</h3>
                    </div>
        </div>);
};

export default Character;
