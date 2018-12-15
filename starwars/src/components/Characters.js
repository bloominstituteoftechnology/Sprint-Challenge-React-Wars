import React from "react";
import './StarWars.css'
import Character from './Character'

 const Characters = props => {
  return (

    <div className="card-container">

      {props.characterRoster.map(character => (
        <Character character={character} key={character.name} />
      ))}

    </div>

  );
};

 export default Characters;