// Write your Character component here
import React from 'react';
import 'https://swapi.py4e.com/api/people/1/';




//create component to render a character
const Character = (props) => {

    let pics = [];

    return (
        <div className="character">
            <h2>{props.character.name}</h2>
            <img src={pics[props.id]} />
            <ul>
                <li>Gender: {props.character.gender}</li>
                <li>Height: {props.character.height}</li>
                <li>Mass: {props.character.mass}</li>
            </ul>
        </div>
    );
}


export default Character;