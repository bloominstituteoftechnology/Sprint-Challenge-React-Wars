import React from 'react';

const Card = (props) => {
  return (
    <div>
      <h1>My name: {props.name}</h1>

      <p>I was born in {props.birthyear}, a beautiful
      {props.gender} specimen of the {props.species}
      species. My eyes are {props.eyecolor}, my hair is
      {props.haircolor}, my skin is {props.skincolor}, I
      weigh {props.mass} kilos and am {props.height}
      cm tall.</p>

      <p>Should you visit my homeworld, you would see me
      driving around in one of my vehicles (which include:
      {props.vehicles}). You can catch me in the following
      films: {props.films}.
    </div>
  )
};

export default Card;
