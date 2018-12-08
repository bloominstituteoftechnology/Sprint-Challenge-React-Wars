import React from 'react';
import ReactDOM from 'react-dom'
import DisplayWindow from './DisplayWindow'
const CharacterBuild = (props) => {
  return(
<ul>
      {props.character.map(character => {
        
        // console.log(props.crossOut);
        return <DisplayWindow><div>{character.name}</div></DisplayWindow>

        return <DisplayWindow><div>{character.birth_year}</div></DisplayWindow>
        
    })}
    </ul>
  )

}

export default CharacterBuild;