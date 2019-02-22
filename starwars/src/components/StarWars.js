import React from 'react';
import './StarWars.css';

const StarWars = props => {
    return (
        <div className='container'>
            {props.characters.map(person => {
                return (
                    <div className='info'>
                        <h2>{person.name}</h2>
                        <p>Born in: {person.birth_year}</p>
                        <p>Gender: {person.gender}</p>
                        <p>Height: {person.height}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default StarWars;