import React from 'react';
import './StarWars.css';

const character = props => {
   return (
       <div className = 'character'>
           <h1>{props.character.name}</h1>
           <div className = 'characterDetails'>
               <div>Birthday: {props.character.birth_year}</div>
               <div>Gender: {props.character.gender}</div>
               <div>Height: {props.character.height}</div>
               <div>Mass: {props.character.mass}</div>
               <div>Hair Color: {props.character.hair_color}</div>
               <div>Skin Color: {props.character.skin_color}</div>
               
           </div>
       </div>
   )
}


export default character;