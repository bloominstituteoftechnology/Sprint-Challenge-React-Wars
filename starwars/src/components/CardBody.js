import React from "react";

const CardBody = props => {
  return (
    <div className="card__body">
      <ul>
        <li>{props.characters.birth_year}</li>
        <li>{props.characters.created}</li>
        <li>{props.characters.edited}</li>
        <li>{props.characters.eye_color}</li>
        {props.characters.films.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
        <li>{props.characters.gender}</li>
        <li>{props.characters.hair_color}</li>
        <li>{props.characters.height}</li>
        <li>{props.characters.homeworld}</li>
        <li>{props.characters.mass}</li>
        <li>{props.characters.skin_color}</li>
        <li>{props.characters.species}</li>
        <li>{props.characters.starships}</li>
        <li>{props.characters.url}</li>
        <li>{props.characters.vehicles}</li>
      </ul>
    </div>
  );
};

export default CardBody;
