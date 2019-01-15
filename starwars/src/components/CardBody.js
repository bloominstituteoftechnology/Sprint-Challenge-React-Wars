import React from "react";

const CardBody = props => {
  return (
    <div className="card__body">
      <ul>
        <li>Species: {props.characters.species}</li>
        <li>Gender: {props.characters.gender}</li>
        <li>Hair Color: {props.characters.hair_color}</li>
        <li>Height: {props.characters.height}</li>
        <li>Mass: {props.characters.mass}</li>
        <li>Skin Color: {props.characters.skin_color}</li>
        <li>Date of Birth: {props.characters.birth_year}</li>
        <li>Eye Color:{props.characters.eye_color}</li>



      </ul>
    </div>
  );
};

export default CardBody;
