import React from 'react';
import '../StarWars.css';

const Wars = props => {
    return (
        <div className='container'>
            {props.characters.map(person => {
                return (
                    <div className='info'>
                        <h2>{person.name}</h2>
                        <p>{person.birth_year}</p>
                        <p>{person.gender}</p>
                        <p>{person.height}</p>
                    </div>
                )
            })}
        </div>
    )
}