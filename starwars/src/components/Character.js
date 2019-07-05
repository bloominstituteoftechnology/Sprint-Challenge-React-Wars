import React from 'react';
import './Character.css';

const Character = props => {
    const { name, birth_year, eye_color, gender, hair_color, height, mass, species } = props.char;
    return (
        <div className="char-container" >
            <h3>{name}</h3>
            <div className="stats" >
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth Year: {birth_year}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Mass: {mass}</p>
            {/* <p> {species[0]} </p> */}
            </div>
            
            
        </div>
    );
};

export default Character;