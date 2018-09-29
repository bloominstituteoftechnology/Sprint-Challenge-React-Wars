import React from 'react';
import './StarWars.css';

const Card = (props)    =>  {
    return(
        <div className="card">
            <div><div>Name:</div><div>{props.name}</div></div>
            <div><div>Height:</div><div>{props.height}</div></div>
            <div><div>Mass:</div><div>{props.mass}</div></div>
            <div><div>Hair:</div><div>{props.hair_color}</div></div>
            <div><div>Skin:</div><div>{props.skin_color}</div></div>
            <div><div>Gender:</div><div>{props.gender}</div></div>
            <div><div>Eye Color:</div><div>{props.eye_color}</div></div>
        </div>
    )
}

export default Card;
