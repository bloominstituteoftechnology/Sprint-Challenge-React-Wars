import React from "react";

const CharDetails = props => {
  console.log(props.chars);

  return (
    <div>
      {props.chars.map(char => (
        <div>
          <div>Name: {char.name}</div>
          <div>Birth Year: {char.birth_year}</div>
          <div>Gender: {char.gender}</div>
          <div>Height: {char.height}</div>
          <div>Mass: {char.mass}</div>
          <div>Hair Color: {char.hair_color}</div>
          <div>Eye Color: {char.eye_color}</div>
          <div>Skin Color: {char.skin_color}</div>
        </div>
      ))}
    </div>
  );
};

export default CharDetails;
