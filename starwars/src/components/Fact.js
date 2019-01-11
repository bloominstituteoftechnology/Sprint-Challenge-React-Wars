import React from 'react';
import './StarWars.css';

const Fact = (props) =>{
  return(
    <div className= "fact">
      <h1>{props.fact.name}</h1>
      <ul>
        <li>Birth Year: {props.fact.birth_year}</li> 
        <li>Gender: {props.fact.gender}</li> 
        <li>Eye Color: {props.fact.eye_color}</li>
        <li>Hair Color: {props.fact.hair_color}</li>  
        <li>Height: {props.fact.height}</li>
        <li>Mass: {props.fact.mass}</li>
      </ul>
    </div>
  );
}

export default Fact;