import React from 'react';
import './StarWars.css'


function StarWars(props){
  
    return (
      <div className="character">
              <h1>{props.character.name}</h1>
              <ul>
              <li><strong>Mass:</strong> {props.character.mass}</li>
              <li><strong>Gender:</strong>{props.character.gender}</li>
              <li><strong>Skin Color:</strong>{props.character.skin_color}</li>
              </ul>       
      </div> 
    );
  
}

export default StarWars;
