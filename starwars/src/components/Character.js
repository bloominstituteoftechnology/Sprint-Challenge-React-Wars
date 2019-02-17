import React from 'react';

const Character = props => {
    return (
        <div className='card'>
            <h3>{props.characterOnProps.name}</h3>
            <p>Birth Year: {props.characterOnProps.birth_year}</p>
            <p>Eye Color: {props.characterOnProps.eye_color}</p>
            <p>Gender: {props.characterOnProps.gender}</p>
            <p>Hair Color: {props.characterOnProps.hair_color}</p>
            <p>Height: {props.characterOnProps.height}</p>
            <p>Mass: {props.characterOnProps.mass}</p>
            <p>Skin: {props.characterOnProps.skin_color}</p>
            {/* <p>Films: {props.characterOnProps.films}</p> */}
            {/* <p>Homeworld: {props.characterOnProps.homeworld}</p> */}
            {/* <p>Species: {props.characterOnProps.species}</p> */}
            {/* <p>Starships: {props.characterOnProps.starships}</p> */}
            {/* <p>Vehicles: {props.characterOnProps.vehicles}</p> */}
        </div>
    )  
}

export default Character;