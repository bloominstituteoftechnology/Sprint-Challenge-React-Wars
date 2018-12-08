import React from 'react';


const StarCard = props => {
  return (
    <div>
      {props.data.map(character => {
        return (
          <div className='card'> 
            <h1>{character.name}</h1>
            <p>Height: {character.height}</p>
            <p>Gender: {character.gender}</p>
          </div>  
        )})}
    </div>
    )
  }
export default StarCard;