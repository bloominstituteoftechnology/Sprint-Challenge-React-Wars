import React from 'react';

const Char = (props) => {
  return (
    <div className="character">
      <div className="info"><h3>Name</h3>: {props.character.name}</div>
      <div className="info"><h3>Gender</h3>: {props.character.gender}</div>
      <div className="info"><h3>Eye Color</h3>: {props.character.eye_color}</div>
      <div className="info"><h3>Hair Color</h3>: {props.character.hair_color}</div> 
      <div className="info"><h3>Skin Color</h3>: {props.character.skin_color}</div>       
      <div className="info"><h3>Height</h3>: {props.character.height}</div> 
      <div className="info"><h3>Birth year</h3>: {props.character.birth_year}</div>
    </div>
  );
};

export default Char;