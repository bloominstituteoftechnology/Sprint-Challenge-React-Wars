import React from 'react';

const Character = props => {
    return (
        <div className='card'>
            <h3>{props.characterOnProps.name}</h3>
            <p><span>Birth Year:</span> {props.characterOnProps.birth_year}</p>
            <p><span>Eye Color:</span> {props.characterOnProps.eye_color}</p>
            <p><span>Gender:</span> {props.characterOnProps.gender}</p>
            <p><span>Hair Color:</span> {props.characterOnProps.hair_color}</p>
            <p><span>Height:</span> {props.characterOnProps.height}</p>
            <p><span>Mass:</span> {props.characterOnProps.mass}</p>
            <p><span>Skin:</span> {props.characterOnProps.skin_color}</p>
            {/* <p>Films: {props.characterOnProps.films}</p> */}
            {/* <p>Homeworld: {props.characterOnProps.homeworld}</p> */}
            {/* <p>Species: {props.characterOnProps.species}</p> */}
            {/* <p>Starships: {props.characterOnProps.starships}</p> */}
            {/* <p>Vehicles: {props.characterOnProps.vehicles}</p> */}
        </div>
    )  
}

export default Character;