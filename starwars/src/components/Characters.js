import React from 'react';
import Card from './Card';
import './StarWars.css';

const Characters = (props) => {
    return (
        <div className='card-container'>
            {props.characters.map((character) => {
                return (
                    <div key={character.name} className='character-cards'>
                        <Card clicked={props.clicked} character={character} />
                    </div>
                )
            })}
        </div>
    )
}

export default Characters;