// import React, { Component } from 'react';
import React from 'react';
import Character from "./Character";

const Characters = props => {

  return (
    <div>
      {props.data && props.starwarsChars.map(character => (
      <Character 
      key={character.id} 
      data={character} 
      />
    ))}
    </div>
  )
}

export default Characters;