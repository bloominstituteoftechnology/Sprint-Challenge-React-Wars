import React from 'react';

const Char = props => {
  return (
    <div>
      <h1>{props.item.name}</h1>
      <ul>
        <li>Height: {props.item["height"]}</li>
        <li>Mass: {props.item["mass"]}</li>
        <li>Hair Color: {props.item.hair_color}</li>
        <li>Skin Color: {props.item.skin_color}</li>
        <li>Eye Color: {props.item.eye_color}</li>
        <li>Birth Year: {props.item.birth_year}</li>
        <li>Gender: {props.item.gender}</li>
        <li>Height: {props.item.height}</li>
      </ul>
    </div>
  );
}

export default Char;
