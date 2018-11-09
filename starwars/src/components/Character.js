import React, { Component } from 'react';
import './StarWars.css';

const Character = props => {
    const char = props.char
    return(
        <div className='card'>
            <h2>{char.name}</h2>
            <div className='info'>
            <p><span>Birth Year:</span> {char.birth_year}</p>
            <p><span>Gender:</span> {char.gender}</p>
            <p><span>Height:</span> {char.height}</p>
            <p><span>Mass:</span> {char.mass}</p>
            <p><span>Eye Color:</span> {char.eye_color}</p>
            <p><span>Hair Color:</span> {char.hair_color}</p>
            <p><span>Skin Color:</span> {char.skin_color}</p>
            <p><span>HomeWorld:</span> <a href={char.homeworld}>{props.homeworld}</a></p>
            </div>
            
        </div>
    );
}

export default Character;