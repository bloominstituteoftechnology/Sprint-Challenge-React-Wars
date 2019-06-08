import React from "react";
import Characters from "./Characters"

import "./StarWars.css"

function StarWarsCharacter(props) {
    return (
        <div className="allCharacters">
            {props.characters.map(characters => {
                return <Characters charactersInfo={characters}/>
            })}
        </div>
    )
}

export default StarWarsCharacter;