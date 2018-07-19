import React from "react";
import Char from "./Char";
import './StarWars.css'

const CharsList = props => {
return (
  <div className="container">
 {props.chars.map(char => <Char key={Math.random()} swChar={char} />)}
 </div>
)
};


export default CharsList; 
