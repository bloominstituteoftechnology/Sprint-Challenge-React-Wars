import React from 'react';
import Films from './Films';

const Card = (props) => {
  console.log("Card receiving", props)

  return (
    <Films films={props.source.films} />
  );
}

export default Card;
