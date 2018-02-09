import React from 'react';

const InfoCard = props => {
  const character = props.character;

  return (
    <div>
      {character.name}
    </div>
  )
}

export default InfoCard;