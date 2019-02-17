import React from 'react';

const Card = props => {
    return (
        <div className="card">
            <h1>{props.starwars.name}</h1>
            <h3>DOB: {props.starwars.birth_year}</h3>
            <h3>Gender: {props.starwars.gender}</h3>
        </div>
    )
}

export default Card;