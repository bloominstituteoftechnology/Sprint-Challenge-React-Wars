import React from "react";
import CharacterData from './CharacterData';

const CharacterCard = props => {
return (
    <div className="character">
    {props.character.map(char => 
        <CharacterData 
            key={char.id}
            character={char}
        />
        )}</div>

    )
}

export default CharacterCard;