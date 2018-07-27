import React from 'react';
import './StarWars.css';

const Card = (props) => {
  return (
    <div className= {`card ${props.show ? "show-card" : null}`} >
      <h1>My name: {props.name}</h1>

      <p>"I was born in {props.birthyear}, a beautiful {props.gender} specimen of my species. My eyes are {props.eyecolor}, my hair is {props.haircolor}, my skin is {props.skincolor}, I weigh {props.mass} kilos and am {props.height}
      cm tall."</p>
    </div>
  );
};

export default Card;
