import React from "react";
import Charachter from "./Charachter";
import './StarWars.css';

const CharachterList = (props) => {
    return(
        <div className="charachterListDiv">
            {props.starwarsChars.map(char => {
            return (
            <Charachter char={char} key={props.name}/>
        );
    })}
  </div>
);
}

export default CharachterList;
