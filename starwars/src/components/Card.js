import React from 'react';
import './Card.css';

const StarWarsCharacters = (props) => {
    return (
        <div className='cardsContainer'>
            {props.starwarsChars.map(character => {
                return (
                    <div className='card' eachchar={character.toString()} key={character.name}>
                        <div className='person'>
                            <h1>{character.name}</h1>
                            <p>Gender: {character.gender}</p>
                            <p>Birth Year: {character.birth_year}</p>
                            <p>Eye Color: {character.eye_color}</p>
                            <p>Skin Color: {character.skin_color}</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Height: {character.height}</p>
                            <p>Mass: {character.mass}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default StarWarsCharacters;