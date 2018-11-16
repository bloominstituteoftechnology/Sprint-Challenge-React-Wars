import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
    return (
        <div className='character-list'>           
            <h2>{props.person.name}</h2>
        </div>
    );
}

export default CharacterList;