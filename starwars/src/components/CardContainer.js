import React from "react";
import './StarWars.css'

import Card from './Card'

function CardContainer(props) {
   return (
     <div className='card-container'>
      {props.characters.map(
           character =>
           <Card
            key={character.name}
            name={character.name}
            height={character.height}
            mass={character. mass}
            hairColor={character.hair_color}
            skinColor={character.skin_color}
            onClick={props.handleClick}
          />
           )}
     </div>
   );
}

export default CardContainer;
