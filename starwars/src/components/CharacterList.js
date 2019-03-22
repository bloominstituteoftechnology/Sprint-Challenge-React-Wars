import React from 'react'
import Character from './Character'
import './StarWars.css'

const CharacterList = (props) =>{

    return (
      <div className = "characterlist">
  
         <div className = "k">
          {props.Characterlist.map(Characters => (
            <Character Character={Characters} />
          ))} 
        </div>
      </div>
    );
  }
  export default CharacterList