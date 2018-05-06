import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div className="main-div">
            {props.results.map(character => {
            return <Character key={character.id} character={character} />;
        })}
        </div>
    )
}

export default CharacterList;

