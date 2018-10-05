import React from "react";

const Characters = props => {
  return (
    <div className="individual">
      <h1 className="bigName">{props.starwarsChars.name}</h1>
      <p>{props.starwarsChars.gender}</p>
      <p>{props.starwarsChars.height}</p>
      <p>{props.starwarsChars.hair_color}</p>
      <p>{props.starwarsChars.eye_color}</p>
      <p>{props.starwarsChars.birth_year}</p>
    </div>
  );
};

export default Characters;
