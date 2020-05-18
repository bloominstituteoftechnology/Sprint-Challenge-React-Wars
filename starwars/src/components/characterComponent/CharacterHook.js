import React from 'react';
import "./StarWars.css";

const CharacterHook = props => {
    console.log(props)
 const {character } = props;

console.log('character: ', character)

return (
    <div className='list'>
            <div className='character'>
                    <h1>{character.name}</h1>
                    <h2>{character.birth_year}</h2>
                    <h3>{character.gender}</h3>
                    <h3>{character.people}</h3>
            </div>

    </div>
)
}

export default CharacterHook;