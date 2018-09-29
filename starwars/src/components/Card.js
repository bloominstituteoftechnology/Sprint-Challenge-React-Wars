import React from 'react';

const Card = (props)=>{
    return (
        <li className="card">
            <h1>{props.charData.name}</h1>
            <h2>Bio</h2>
            <p>Born: {props.charData.gender}</p>
            <p>Born: {props.charData.birth_year}</p>
            <p>Born: {props.charData.height}</p>
            <p>Born: {props.charData.mass}</p>
            <p>Born: {props.charData.hair_color}</p>
            <p>Born: {props.charData.eye_color}</p>
            <p>Born: {props.charData.skin_color}</p>
            {/* Add species */}
            <h2>StarShips and Vehicles</h2>
            <h2>Films Appeared In</h2>
        </li>
    )
}

export default Card;