import React from 'react';
import './StarWars.css';

const Card = (props) => {
  props.char.show = false;

  return (
    <div className= {`card ${props.show ? "show-card" : null}`} >
      <h1>My name: {props.char.name}</h1>

      <p>"I was born in {props.char.birth_year}, a beautiful {props.char.gender} specimen of my species. My eyes are {props.char.eye_color}, my hair is {props.char.hair_color}, my skin is {props.char.skin_color}, I weigh {props.char.mass} kilos and am {props.char.height}
      cm tall."</p>
    </div>
  );
};

export default Card;
