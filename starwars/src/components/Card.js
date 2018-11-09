import React from 'react';
import './StarWars.css';

function Card(props) {
    return (
        <div className="card">
            <h3>name: {props.name}</h3>
            <p>gender: {props.gender}</p>
            <p>birth year: {props.birthYear}</p>
            <p>eye color: {props.eyeColor}</p>
            <p>hair color: {props.hairColor}</p>
            <p>height: {props.height}</p>
            <p>weight: {props.mass}</p>
            <p>species: {props.species}</p>
            <p>home world: {props.homeWorld}</p>
            <p>star ships: {props.starShips}</p>
            <p>films: {props.films}</p>
        </div>
    );
}

export default Card;