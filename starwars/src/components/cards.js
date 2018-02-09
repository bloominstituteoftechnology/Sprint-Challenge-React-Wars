import React from "react";

function Cards(props) {
  return (
    <div className="cards">
        <div className="cards__container">
          <p className="cards__container__name">{props.chars.name}</p>
          <p className="cards__container__text"><strong>Gender:</strong> {props.chars.gender}</p>
          <p className="cards__container__text"><strong>Born:</strong> {props.chars.birth_year}</p>
          <p className="cards__container__text"><strong>Eye Color:</strong> {props.chars.eye_color}</p>
          <p className="cards__container__text"><strong>Hair Color:</strong> {props.chars.hair_color}</p>
          <p className="cards__container__text"><strong>Height:</strong> {props.chars.height}</p>
        </div>
    </div>
    )
}

export default Cards;