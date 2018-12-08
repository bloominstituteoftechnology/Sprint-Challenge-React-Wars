import React from 'react';
import "./StarWars.css";

const StarCard = props => {
  return (
      <div className='starContainer'>
      {props.data.map(character => {
          return (
           <div className='starCard'> 
           <h1>{character.name}</h1>
           <p>Gender: {character.gender}</p>
           <p>Height: {character.height}cm</p>
           <p>Mass: {character.mass}kg</p>
           <p>Skin Color: {character.skin_color}</p>
           <p>Eye Color: {character.eye_color}</p>
           <p>Birth Year: {character.birth_year}</p>
           <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
           </div>
          )
      })}
      
      </div>
  )
}



export default StarCard;