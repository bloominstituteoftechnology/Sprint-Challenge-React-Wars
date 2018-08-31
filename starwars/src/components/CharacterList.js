import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  return (   
    <ul className='unordered-list'>
      {props.characterArray.map((eachElement, i) => {        
        return <Character charData={eachElement} id={eachElement}/>;  
      })}
    </ul>   
  );
}


export default CharacterList;