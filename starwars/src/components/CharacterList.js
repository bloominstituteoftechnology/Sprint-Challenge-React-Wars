import React from 'react';
import CharacterCard from './CharacterCard';



const CharacterList = (props) => {
    return (
        <div>
            {props.characters.map(characters => (<CharacterCard characters={characters} />))}
           
        </div>
    );
}


export default CharacterList;