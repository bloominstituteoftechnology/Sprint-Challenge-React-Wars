import React from "react";

const Character = () => {
  return (
    <div>
      <h3>Name: {character.name}</h3>
      <h5>Gender: {character.gender}</h5>
      <h5>Born: {character.birth_year}</h5>
      <div>
        <p>
          Height: {character.height} - Mass:{" "}
          {character.mass}
        </p>
        <p>
          Hair Color: {character.hair_color} - Eye-Color:{" "}
          {character.eye_color}
        </p>
      </div>
    </div>
  );
};

export default Character;
