import React from 'react';

const Card = props => {
    return (
        <div className='cardContainer'>
        {props.data.map(character => {
            return (
             <div className='card'> 
             <h1>{character.name}</h1>
             <p>Height: {character.height}</p>
             <p>Gender: {character.gender}</p>
             <p></p>
             
             
             
             </div>
            )
        })}
        
        
        </div>
    )
}
















export default Card;