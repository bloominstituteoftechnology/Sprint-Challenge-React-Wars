import React from 'react';
import './StarWars.css'
import StarWarsCharacter from './StarWarsCharacter';

function StarWars(props){
  
    return (
      <div>
        {props.starwarsChars.Array.length.map(character =>(<StarWarsCharacter character={character} key={character.name}/> ) )}
      </div>
    );
  
}

export default StarWars;
