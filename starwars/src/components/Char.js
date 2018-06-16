import React from 'react';
import "./StarWars.css";



const Char = props => {

    return (
        <div className="list">
        <p>NAME: <h2>{props.newChar.name}</h2></p>
         <p>HEIGHT: <h2>{props.newChar.height}</h2></p>
          <p>GENDER: <h2>{props.newChar.gender}</h2></p>


        </div>
        ) ;
};

export default Char;
