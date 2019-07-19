import React from 'react';
import Films from './Films';

const Card = (props) => {

// console.log("Card receiving", props)
// calcBMI test PASSED: console.log(calcBMI(16.9, 105.4))

  const calcBMI = (kgMass, cmHeight) => {
      const precise = (kgMass / cmHeight / cmHeight) * 10000
      return Math.round( precise * 10) / 10;
  }

  return (
    <div>
      <h2>{props.source.name}</h2>
      <p>BMI: {calcBMI(props.source.mass, props.source.height)}</p>
      {props.source.films.map(i => <Films films={i} key={i} />)}
    </div>
  );
}

export default Card;