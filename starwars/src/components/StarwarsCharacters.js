import React from 'react';
import Character from './Character';

function StarwarsCharacters(props) {
    return (
      <div>
        {props.chars.map(char => <Character key={char.name} char={char} />)} 
      </div>
    );
};
 export default StarwarsCharacters; 