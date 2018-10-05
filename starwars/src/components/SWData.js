import React from 'react';

const SWData = props => {
  return (
    <div className='sw-data'>
      <h2>{props.starwarsChars.name}<br/></h2>
      <span>Gender: {props.starwarsChars.gender}</span>
      <span>Birth Year: {props.starwarsChars.birth_year}</span>
      <span>Height: {props.starwarsChars.height}</span>
      <span>Hair Color: {props.starwarsChars.hair_color}</span>
      <span>Eye Color: {props.starwarsChars.eye_color}</span>
      <span>Skin Color: {props.starwarsChars.skin_color}</span>
    </div>
  );
};

export default SWData;