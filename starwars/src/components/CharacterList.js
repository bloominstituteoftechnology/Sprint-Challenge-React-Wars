import React from 'react';
import CharacterCard from './CharacterCard';

import './StarWars.css';

const CharacterList = (props) => {
    return (
        <div className='characterList'>
            {props.starwarsChars.map((e, i) => {
                return (
                    <CharacterCard characterImages={props.characterImages} character={e} key={e + i}/>
                )
            })}
        </div>
    )
}

export default CharacterList;