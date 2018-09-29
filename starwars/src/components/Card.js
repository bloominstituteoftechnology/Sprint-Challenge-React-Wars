import React from 'react';
import './StarWars.css';

const Card = (props) => {
    return (
        <div className='card'>
            <h1 onClick={props.clicked}>Hello there!</h1>
            <div className={props.character.clicked ? 'true' : 'false'}>
                <div className='attribute name'><p>Name</p>{props.character.name}</div>
                <div className='attribute'><p>Birth year</p>{props.character.birth_year}</div>
                {/* <div className='attribute'><p>Home world</p>{props.character.homeworld}</div> */}
                <div className='attribute'><p>Gender</p>{props.character.gender}</div>
                <div className='attribute'><p>Height</p>{props.character.height}</div>
                <div className='attribute'><p>Mass</p>{props.character.mass}</div>
                <div className='attribute'><p>Skin color</p>{props.character.skin_color}</div>
                <div className='attribute'><p>Eye color</p>{props.character.eye_color}</div>
                <div className='attribute'><p>Hair color</p>{props.character.hair_color}</div>
                {/* <div className='attribute'><p>Species</p>{props.character.species}</div> */}
                {/* <div className='attribute'><p>Starships</p>{props.character.starships}</div> */}
                {/* <div className='attribute'><p>Vehicles</p>{props.character.vehicles}</div> */}
                {/* <div className='attribute'><p>Films</p>{props.character.films}</div> */}
                <div className='attribute'><p>Created</p>{props.character.created}</div>
                <div className='attribute'><p>Edited</p>{props.character.edited}</div>
            </div>
        </div>
    )
}

export default Card;