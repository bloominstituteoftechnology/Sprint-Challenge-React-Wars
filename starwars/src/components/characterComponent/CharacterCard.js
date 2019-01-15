import React from "react";
import CharacterData from './CharacterData';
import '../characterComponent/StarWars.css'

const CharacterCard = props => {
return (
    <div className="character">
    {props.character.map(char => 
        <CharacterData 
            key={char.created}
            character={char}
        />
        )}</div>

    )
}

export default CharacterCard;