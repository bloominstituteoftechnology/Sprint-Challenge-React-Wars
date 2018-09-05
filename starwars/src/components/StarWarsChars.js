import React from 'react';

const StarWarsChars = props => {
return (
<div className="char-card">
  <p>Name: {props.chars.name}</p>
  <p>Gender: {props.chars.gender}</p>
  <p>Eye Color: {props.chars.eye_color}</p>
  <p>Hair Color: {props.chars.hair_color}</p>
  
</div>
  );
};

export default StarWarsChars;