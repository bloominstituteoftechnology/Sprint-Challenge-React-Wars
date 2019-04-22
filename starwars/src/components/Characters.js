import React from 'react';
import Character from "./Character";

const Characters = (props) => {
  return (
    <div className="characters">{props.characters.map( character => 
      <Character character={character} 
      />)}
    </div>
  )
}

export default Characters;