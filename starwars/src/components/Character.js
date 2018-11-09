import React from 'react';

function Character(props){
   return (
    <div className='char-card'>
        <h2>{props.character.name}</h2>
        <li>Gender : {props.character.gender}</li>
        <li>Hair color : {props.character.hair_color}</li>
        <li>Birth Year : {props.character.birth_year}</li>
        <li>Eye color : {props.character.eye_color}</li>
    </div>
   )
}

export default Character