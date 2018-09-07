import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <ul>
      {props.propsCards.map(card => {
        <Card propsCard={card} />;
      })}
    </ul>
  );
}

export default CardList;
