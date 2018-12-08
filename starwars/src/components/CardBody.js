import React from "react";

const CardBody = props => {
  return (
    <div className="card__body">
      <ul>
        <li>Date of Birth: {props.characters.birth_year}</li>
        <li>Created: {props.characters.created}</li>
        <li>Edited: {props.characters.edited}</li>
        <li>Eye Color:{props.characters.eye_color}</li>
        {/* {props.characters.films.map((e, i) => (
          <li key={i}>{e}</li>
        ))} */}
        <li>Gender: {props.characters.gender}</li>
        <li>Hair Color: {props.characters.hair_color}</li>
        <li>Height: {props.characters.height}</li>
        {/* <li>{props.characters.homeworld}</li> */}
        <li>Mass: {props.characters.mass}</li>
        <li>Skin Color: {props.characters.skin_color}</li>
        {/* <li>{props.characters.species}</li> */}
        {/* <li>{props.characters.starships}</li> */}
        {/* <li>{props.characters.url}</li> */}
        {/* <li>{props.characters.vehicles}</li> */}
      </ul>
    </div>
  );
};

export default CardBody;
