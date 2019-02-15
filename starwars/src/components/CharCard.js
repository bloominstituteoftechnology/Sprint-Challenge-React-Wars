import React from "react";

const CharCard = props => {
  return (
    <div className="char-card">
      <div className="card-background" />
      <div className="card-foreground">
        <p>Name: {props.moreCharInfo.name}</p>
        <p>Birth Year: {props.moreCharInfo.birth_year}</p>
        <p>Gender: {props.moreCharInfo.gender}</p>
        <p>Mass: {props.moreCharInfo.mass}</p>
      </div>
    </div>
  );
};

export default CharCard;
