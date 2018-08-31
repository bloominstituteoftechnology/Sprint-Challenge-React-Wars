// import React, { Component } from 'react';
// import Character from "./Character";

const Characters = props => {
  return (
    <div>
      {props.starwarsChars.map(character => <Character key={character.id} data={character} />)}
    </div>
  )
}

// export default Characters;