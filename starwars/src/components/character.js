// import React, { Component } from 'react';
import React from 'react';
import './StarWars.css';
const Character = props => {
  // console.log(props.data);
  return (
  
  <div className= "card">
  
  <h2>{props.data.name}</h2>

  <div className= "stats">
    <p>Born: {props.data.birth_year}</p>
    <p>Gender: {props.data.gender}</p>
    <p>Hair: {props.data.hair_color}</p>
    <p>Eyes: {props.data.eye_color}</p>
    <p>Complextion: {props.data.skin_color}</p>
    <p>Height: {props.data.height}</p>
    <p>Mass: {props.data.mass}</p>
  </div>
  <div className= "notes"> 
    <p className= "p-notes">{props.data.created}</p>
    <p className= "p-notes">{props.data.edited}</p>

  </div>

  </div>

  );
 
};

export default Character;