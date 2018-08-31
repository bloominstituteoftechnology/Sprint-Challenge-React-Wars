import React from 'react';
import Character from './Character';

import './StarWars.css'

const CharacterList = (props) => {
  return (   
    <ul className='unordered-list'>
      {props.characterArray.map((eachElement, i) => {        
        return (
          <div>
            <Character charData={eachElement} id={eachElement}/>            
          </div>
        );
      })}
    </ul>   
  );
}


export default CharacterList;