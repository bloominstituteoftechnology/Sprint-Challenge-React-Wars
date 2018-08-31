// import React, { Component } from 'react';
import React from 'react';
import './StarWars.css';
const Character = props => {
  // console.log(props.data);
  return (
  
  <div className= "card">
  
  <h2>NAME:{props.data.name}</h2>

  <div className= "stats">
    <p>{props.data.birth_year}</p>
    <p>{props.data.gender}</p>
    <p>{props.data.hair_color}</p>
    <p>{props.data.eye_color}</p>
    <p>{props.data.skin_color}</p>
    <p>{props.data.height}</p>
    <p>{props.data.mass}</p>
  </div>
  <div>
    <p>{props.data.created}</p>
    <p>{props.data.edited}</p>

  </div>

  </div>

  );
 
};

export default Character;