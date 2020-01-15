import React from 'react';
import CharacterList from './CharacterList';


const CharacterCard = props => {
    console.log ('props', props)
 return(

    <div className= 'people-list'>
        <h1>Name:  {props.attr.name}</h1>
        <p>Birth_Year: {props.attr.birth_year}</p>
        <p>Eye_Color: {props.attr.eye_color}</p>
        <p>Gender: {props.attr.gender}</p>
        <p>Created: {props.attr.created}</p>
       </div>  
    

 )
}
export default CharacterCard