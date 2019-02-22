import React from 'react';
import './StarWars.css';

const StarWars = props => {
    return (
        <div className = 'cardContainer'>
        {props.sith.map(char => {
            return (
                <div className = 'card' key = {char.title}>
                <h2> {char.title}</h2>
                <p>Name: {char.name}</p>
                <p>Birth Year: {char.birth_year}</p>
                <p>Gender: {char.gender}</p>
                <p>Homeworld: {char.homeworld}</p>
                <p>Species: {char.species}</p>
            </div>
        
        )})}
        </div>
    );
};

export default StarWars;