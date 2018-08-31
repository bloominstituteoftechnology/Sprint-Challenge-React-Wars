import React from 'react';

const Character = props => {
    return (
       <div>
           <h2>{props.starwarsChar.name}</h2>
           <h4>Gender: {props.starwarsChar.gender}</h4>
           <h4>Birth Year: {props.starwarsChar.birth_year}</h4>
           <h4>Mass: {props.starwarsChar.mass}</h4>
           <h4>Height: {props.starwarsChar.height}</h4>
           <h4>Hair Color: {props.starwarsChar.hair_color}</h4>
           <h4>EyerColor: {props.starwarsChar.eye_color}</h4>
           <h4>Skin Color: {props.starwarsChar.skin_color}</h4>
       </div> 
    )
}


export default Character;