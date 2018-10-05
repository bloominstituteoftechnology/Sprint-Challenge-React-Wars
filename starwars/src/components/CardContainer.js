import CharacterCard from './CharacterCard'
import './StarWars.css'
import React from 'react';
const CardContainer= props => {
  return (
      <div className='cardContainer'>
        {
          props.starwarsChars.map((item, idx) => {
            return <CharacterCard 
                    key={idx} 
                    character={item} 
                    getCharacters={props.getCharacters}
                    />
          })
        }
      </div>
      );
};

export default CardContainer;
