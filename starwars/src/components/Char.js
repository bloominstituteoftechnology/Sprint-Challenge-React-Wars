import React from 'react';

const Char = props => {
    return (
        <div className = "char-content"> 
            <p>Birthdate: {props.char.birth_year}</p> 
            <p>Created: {props.char.created}</p>
            <p>Edited: {props.char.edited}</p>
            <p>Eye Color: {props.char.eye_color}</p>
            <p>Gender: {props.char.gender}</p>
            <p>Hair Color: {props.char.hair_color}</p>
            <p>Height: {props.char.height}</p>
            <p>Homeworld: {props.char.homeworld}</p>
            <p>Mass: {props.char.mass}</p>
        </div>
    )
}
//trying to make up content for a card, but nothing rendering yet
export default Char;