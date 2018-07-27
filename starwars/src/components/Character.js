import React from 'react';
import './Character.css';

const Character = props => {
    const { name, birth_year, eye_color, gender, hair_color, height, mass,  } = props.char;
    return (
        <div className="char-container" >
            <h3>{name}</h3>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            
        </div>
    );
};

export default Character;