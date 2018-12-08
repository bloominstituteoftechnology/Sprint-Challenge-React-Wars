import React from 'react';

const Char = (props) => {
  const films = props.character.films;
const filmsDisplay = films.map(film => <li>{film}</li>);
  return (
    <div className="character">
      <div><h3>Name</h3>: {props.character.name}</div>
      <div><h3>Gender</h3>: {props.character.gender}</div>
      <div><h3>Hair Color</h3>: {props.character.hair_color}</div> 
      <div><h3>Skin Color</h3>: {props.character.skin_color}</div>       
      <div><h3>Height</h3>: {props.character.height}</div> 
      <div><h3>Mass</h3>: {props.character.mass}</div> 
      <div><h3>Birth year</h3>: {props.character.birth_year}</div>
      <div><h3>Eye Color</h3>: {props.character.eye_color}</div>
    </div>
  );
};

export default Char;