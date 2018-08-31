import React from 'react';



function DisplayCard(props) {
    return(

        <li>
        <h2>Name: {props.character.name}</h2>
        <p>Birthyear: {props.character.birth_year}</p>
        <p>Gender: {props.character.gender}</p>
        <p>Hair Color: {props.character.hair_color}</p>
        <p>Eye Color: {props.character.eye_color}</p>
        <p>Skin color: {props.character.skin_color}</p>
        <p>Height: {props.character.height}</p>
        <p>Mass: {props.character.mass}</p>
    </li>

    )
}

export default DisplayCard; 