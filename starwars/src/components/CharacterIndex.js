import React from "react";
import Char from "./Char";
import "./StarWars.css";


const CharacterIndex = props => {

    return (
        <div >
        {props.char.map(char => <Char key={char.name} newChar={char} />)}
        </div>


        ) ;
};


export default CharacterIndex;
