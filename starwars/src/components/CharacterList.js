import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
    return (
        <div>
            {props.starwarsChars.map((e, i) => {
                return (
                    <CharacterCard name={e.name}/>
                )
            })}
        </div>
    )
}

export default CharacterList;