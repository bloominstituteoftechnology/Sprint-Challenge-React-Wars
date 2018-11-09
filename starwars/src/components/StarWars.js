import React, { Fragment } from 'react';
import StarWarsProfile from './StarWarsProfile';
import './StarWars.css'

const StarWars = props => {
    return (
    
    <div className="card">
    <h1>{props.starwarsOnProps.name}</h1>
    <h2>{props.starwarsOnProps.birth_year}</h2>
    <h2>{props.starwarsOnProps.created}</h2>
    <h2>{props.starwarsOnProps.edited}</h2>
    <h2>{props.starwarsOnProps.eyeColor}</h2>
    <h2>{props.starwarsOnProps.gender}</h2>
    <h2>{props.starwarsOnProps.hair_color}</h2>
    <h2>{props.starwarsOnProps.height}</h2>
    <h2>{props.starwarsOnProps.mass}</h2>
    <h2>{props.starwarsOnProps.skin_color}</h2>
    <h3 className="array">{props.starwarsOnProps.films}</h3>
    <h3 className="array">{props.starwarsOnProps.species}</h3>
    <h3 className="array">{props.starwarsOnProps.starships}</h3>
    <h3 className="array">{props.starwarsOnProps.vehicles}</h3>
    <h2>{props.starwarsOnProps.url}</h2>


    
    </div>
   );
};


export default StarWars; 
