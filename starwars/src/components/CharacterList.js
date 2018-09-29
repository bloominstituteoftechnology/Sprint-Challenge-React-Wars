//this component will be used to render list of character cards

import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) =>{
    return (
        <div>
            {props.characters.map(character => {
                return (<CharacterCard key={character.created} characterInfo={character}/>)
            })}
        </div>
    )
}

export default CharacterList;