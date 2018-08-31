// import React, { Component } from 'react';
import React from 'react';
import Character from "./Character";

const Characters = props => {

  return (
    <div>
      {props.characters.map(item =>
      <Character 
      key={item.name} 
      data={item} 
      />
      )}
    </div>
  )
}

export default Characters;