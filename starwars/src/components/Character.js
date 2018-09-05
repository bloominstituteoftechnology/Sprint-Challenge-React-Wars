import React, { Component } from 'react';
import './StarWars.css'

const Character = props => {
    return (
      <div className='character'>
        <h3>{props.oneChar.name}</h3>
        <p>Birth Year: {props.oneChar.birth_year}</p>
        <p>Eye Color: {props.oneChar.eye_color}</p>
        <p>Hair Color: {props.oneChar.hair_color}</p> 
        <p>Height: {props.oneChar.height}</p> 
        <p>Mass: {props.oneChar.mass}</p>
      </div>
    );
}

export default Character
