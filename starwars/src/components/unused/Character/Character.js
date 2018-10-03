import React from 'react';
//  import { Link } from 'react-router-dom';

 const Character = (props) => {
   return <div className="Card-item">
   <p className="name">{props.name}</p>
      <p>Height: {props.height} cm</p>
      <p>Mass: {props.mass} kg</p>
      <p>Hair Color: {props.hair_color}</p>
      <p>Skin Color: {props.skin_color}</p>
      <p>Eye Color: {props.eye_color}</p>
      <p>Birth Year: {props.birth_year}</p>
      <p>Gender: {props.gender}</p>
   </div>
 }
 
 export default Character;