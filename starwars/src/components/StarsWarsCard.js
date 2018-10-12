import React from 'react';

const StarWarsChars = props => {
    return(
        <div>
            <h1 onClick={() => {props.card(props.index)}}>{props.characters.name}</h1>
            <div className="character-card">
            <p>Birth Year: {props.characters.birth_year}</p>
            <p>Gender: {props.characters.gender}</p>
            <p>Height: {props.characters.height}</p>
            <p>Mass: {props.characters.mass}</p>
            <p>Hair Color: {props.characters.hair_color}</p>
            <p>Eye Color:{props.characters.eye_color}</p>
            {/* <p>Flims: {props.characters.films}</p> */}
            </div>
        </div>
    )
}

export default StarWarsChars;