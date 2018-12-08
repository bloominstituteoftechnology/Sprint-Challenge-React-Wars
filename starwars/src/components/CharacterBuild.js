import React from 'react';
import ReactDOM from 'react-dom'
import DisplayWindow from './DisplayWindow'
const CharacterBuild = (props) => {
  return(
<div>
      {props.character.map(character => {
        
        // console.log(props.crossOut);
        return <DisplayWindow><div>{character.name}</div></DisplayWindow>
        
    })}
    </div>
  )

}

export default CharacterBuild;