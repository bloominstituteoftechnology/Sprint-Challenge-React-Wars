import React from 'react';
import "./StarWars.css";
import InfoButton from "./InfoButton";


const Char = props => {

    return (
        <div className="list">
        <p>NAME:</p> <h2>{props.newChar.name}</h2>
         <p>HEIGHT: </p><h2>{props.newChar.height}</h2>
          <p>GENDER:</p> <h2>{props.newChar.gender}</h2>
          <InfoButton class="buttonStyle" /><InfoButton />


        </div>
        ) ;
};

export default Char;
