import React from 'react';
import './StarWars.css';

const Character = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div>Name: {props.char.name}</div>
        <div>Birthday: {props.char.birth_year}</div>
        <div>Gender: {props.char.gender}</div>
        <div>Eye: {props.char.eye_color}</div>
        <div>Hair: {props.char.hair_color}</div>
        <div>Height: {props.char.height}</div>
        <div>Skin: {props.char.skin_color}</div>
        <div>Mass: {props.char.mass}</div>
        <div>Homeworld: {props.char.homeworld}</div>
        <div>Created: {props.char.created}</div>
        <div>Edited: {props.char.edited}</div>
        <div> URl: {props.char.url}</div>
        <div>
          films:
          {props.char.films.map((film) => <div>{film}</div>)}
        </div>
        <div>species: {props.char.species.map((specie) => <div>{specie}</div>)}</div>
        <div>starships: {props.char.starships}</div>
        <div>vehicles: {props.char.vehicles}</div>
      </div>
    </div>
  );
};

export default Character;
