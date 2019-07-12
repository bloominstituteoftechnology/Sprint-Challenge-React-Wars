import React from "react";

const Character = ({character}) => {
    const {name, gender, birth_year, height, mass, hair_color, eye_color} = character 
  return (
    <div>
      <h3>Name: {name}</h3>
      <h5>Gender: {gender}</h5>
      <h5>Born: {birth_year}</h5>
      <div>
        <p>
          Height: {height} - Mass:{" "}
          {mass}
        </p>
        <p>
          Hair Color: {hair_color} - Eye-Color:{" "}
          {eye_color}
        </p>
      </div>
    </div>
  );
};

export default Character;
