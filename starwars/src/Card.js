import React, {Component} from 'react';
import './Card.css';

const Card = (props) => {
  const char = props.char;
  return (
    <div className='card'>
     <h1>{props.char.name}</h1> 
     /* spent too much time playing with css */
    </div>
  );
};
// ^^ Can't comment out above
/* {props.char.map((char, i) => {
        return <Card key={i} char={char} /> 
      })}*/


export default Card;