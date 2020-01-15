import React from 'react';
import CharacterList from './CharacterList';


const CharacterCard = props => {
 return(

    <div className= 'people-list'>
        <h1>Name:  {props.people.name}</h1>
        <p>Birth_Year: {props.people.birth_year}</p>
        <p>Eye_Color: {props.people.eye_color}</p>
        <p>Gender: {props.people.gender}</p>
        <p>Created: {props.people.created}</p>
       </div>  
    

 )
}
export default CharacterCard