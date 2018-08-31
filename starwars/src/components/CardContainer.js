import React from "react";

import Card from './Card'

function CardContainer(props) {
   return (
      props.characters.map(
           character =>
           <Card
            key={character.name}
            name={character.name}
            height={character.height}
            mass={character. mass}
            hairColor={character.hair_color}
            skinColor={character.skin_color}
          />
           )
   );
}

export default CardContainer;
