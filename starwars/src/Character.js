import React from "react";
import "./components/StarWars.css";
 const Character = props => {
  return (
    <div className="character">
      <div className="character-name">{props.character.name}</div>
      <hr />
      <div className="character-data">Gender: {props.character.gender}</div>
      <div className="character-data">
        Birth Year: {props.character.birth_year}
      </div>
      <div className= "character-data">Eye color:{props.character.eye_color}</div>
      <div className= "character-data">Height:{props.character.height}</div>
    </div>
    
  );
};
 export default Character;
