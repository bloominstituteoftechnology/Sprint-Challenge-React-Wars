import React from 'react';
import ReactDOM from 'react-dom'
import DisplayWindow from './DisplayWindow'
const CharacterBuild = (props) => {
  return(
<div>
      {props.character.map(character => {
        
        // console.log(props.crossOut);
        return <DisplayWindow>
          <div style={{color:'white',fontSize: '20px'}}>{character.name}</div>
          <div>DOB:{character.birth_year}</div>
          <div>Created On:{character.created}</div>
          <div>Eye Color:{character.eye_color}</div>
          <div>Gender:{character.gender}</div>
          

        </DisplayWindow>

        
        
    })}
    </div>
  )

}

export default CharacterBuild;