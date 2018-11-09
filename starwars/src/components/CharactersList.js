import React from 'react';
import Characters from './Characters'

const CharactersList = props =>{
  return(
    <div>
      {props.starwarsChars.map(charactersInMap =>(
        <Characters
          charactersInProps={charactersInMap}
        />
      ))}
    </div>
  )
}

export default CharactersList;
