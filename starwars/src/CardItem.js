import React from "react";

function CardItem(props) {
    return (
    <div className="characters">
      {props.starwarsChars.map(cardObjects => {
          return (
          <div className="card" key={cardObjects.name} cardObjects={JSON.stringify(cardObjects)}>
            <h1>{cardObjects.name}</h1>
            <ul className="list">
              <li>Weight: {cardObjects.height}</li>
              <li>Mass: {cardObjects.mass}</li>
              <li>Hair Color: {cardObjects.hair_color}</li>
              <li>Skin Color: {cardObjects.skin_color}</li>
              <li>Eye Color: {cardObjects.eye_color}</li>
              <li>Birth Year: {cardObjects.birth_year}</li>
              <li>Gender: {cardObjects.gender}</li>
              
            </ul>
          </div>
          );
      })}
    </div>
    );
}

export default CardItem;
