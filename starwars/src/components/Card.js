import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <h1>Name: {props.character.name}</h1>
            <h3>Homeworld: {props.character.homeworld}</h3>
            <h3>Film: {props.character.films[0]}</h3>
            <h3 className={ props.character.gender === 'n/a' ? 'noGender' : 'gender'}>Gender: {props.character.gender}</h3>
            <h3 className={ props.character.starships[0] ? 'ship' : 'noShip'}>StarShip: {props.character.starships[0]}</h3>
            <h3 className={ props.character.vehicles[0] ? 'vehicle' : 'noVehicle'}>Vehicles: {props.character.vehicles[0]}</h3>
        </div>
    );
}

export default Card;