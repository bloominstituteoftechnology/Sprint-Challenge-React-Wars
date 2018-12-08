import React from "react";

const CardContainer = props => {
  return (
    <div>
      {props.charArray.map(char => (
        <div className="cardContainer">
          <h3>Name: {char.name}</h3>
          <p>Height: {char.height}</p>
          <p>Mass: {char.mass}</p>
          <p>Hair Color: {char.hair_color}</p>
          <p>Skin Color: {char.skin_color}</p>
          <p>Eye Color: {char.eye_color}</p>
          <p>Birth Year: {char.birth_year}</p>
          <p>Gender: {char.gender}</p>
          <p>Created: {char.created}</p>
          <p>Last Edited: {char.edited}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
