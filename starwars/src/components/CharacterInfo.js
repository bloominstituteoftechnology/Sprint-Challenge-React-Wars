import React from "react";
import Char from "./Char";
import "./StarWars.css";


const CharacterInfo = props => {

    return (
        <div >
        {props.char.map(char => <Char key={char.name} newChar={char} />)}
        </div>


        ) ;
};


export default CharacterInfo;
