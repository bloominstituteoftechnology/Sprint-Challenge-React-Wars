import React from "react";
// import './CharacterCard.css';
import Character from "./Character";

const CharacterCards = props => {
    return (
        <div>
            {props.starwarsChars.map((char, i) => <Character key={i} char={char} />)}
        </div>
    );
}
export default CharacterCards;