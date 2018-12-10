import React from "react";
import CardBody from "./CardBody";

const Card = props => {
  return (

    <div className="container">
      {props.characters.map((x, i) => {
        return (
          <div className="card" key={100}>
            <h1 className="card__title">{props.characters[i].name}</h1>
            <CardBody characters={x} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
