import React from "react";

const Card = props => {
  const {
    name,
    height,
    hair_color,
    eye_color,
    birth_year,
    gender,
  } = props.character;

  return (
    <div className="card">
      <h1 className="card__header">{name}</h1>
      <div className="card__body">
        <div className="card__row">
          <p>DOB: {birth_year}</p>
          <p>{gender}</p>
        </div>
        <div className="card__row">
          <p>height: {height}</p>
          <p>hair color: {hair_color}</p>
          <p>eye color: {eye_color}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
