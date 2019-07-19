import React from 'react';
import Films from './Films';

const Card = (props) => {
  console.log("Card receiving", props)

  const calcBMI = (kgMass, cmHeight) => {
      const precise = (kgMass / cmHeight / cmHeight) * 10000
      return Math.round( precise * 10) / 10;
  }

console.log(calcBMI(16.9, 105.4))

  return (
    <div>
      <h2>{props.source.name}</h2>
      <p>BMI: {calcBMI(props.source.mass, props.source.height)}</p>
      <Films films={props.source.films} />
    </div>
  );
}

export default Card;
