import React from "react";
import './CharacterCard.css';
import CharacterSelect from "./CharacterSelect";

const CharacterCard = props => {
    return (
        <div>
            <CharacterSelect />
            <div className='character-info'>{props.characterInfo}</div>
        </div>
    );
}
export default CharacterCard;