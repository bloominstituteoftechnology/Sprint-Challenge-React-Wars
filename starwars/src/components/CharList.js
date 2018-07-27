import React from 'react';
import CharCard from './CharCard.js';

const CharList = props => {
    return(
        <div className = "char-list">
        {props.starwarsChars.map( char => 
          <CharCard
        name={char.name} 
          height={char.height} 
          mass={char.mass}
           hairColor={char.hair_color} 
           skinColor={char.skin_color} 
           eyeColor={char.eye_color} 
           birthYear={char.birth_year} 
           gender={char.gender}
           />)}            
        </div>
    );
};


export default CharList;
