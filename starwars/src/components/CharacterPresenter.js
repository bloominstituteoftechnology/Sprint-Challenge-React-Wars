import React from "react";
import Characters from "./characters";

const CharacterPresenter = props => {
    return (
        props.starwarsChars.map(char => {
            return (
                <Characters char={char} key={char.name} />
            )
        })
    );
}

export default CharacterPresenter;