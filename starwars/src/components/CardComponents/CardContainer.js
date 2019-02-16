import React from "react";
import "./cardContainer.css";
import Card from "./Card";

const CardContainer = props => {
  return (
    <div className="cardContainer">
      {props.swData.map((char) => {
        return <Card key={char.created} char={char} />;
      })}
    </div>
  );
};

export default CardContainer;
