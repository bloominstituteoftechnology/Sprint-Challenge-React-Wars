import CharacterCard from './CharacterCard'
import './StarWars.css'
import React from 'react';
const CardContainer= props => {
  return (
      <div className='cardContainer'>
        this is the card container
        {
          props.starwarsChars.map((item, idx) => {
            return <CharacterCard key={idx} character={item}/>
          })
        }
      </div>
      );
};

export default CardContainer;
