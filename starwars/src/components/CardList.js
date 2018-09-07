import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <ul>
      {props.chars.map(card => {
        return <Card card={card} />;
      })}
    </ul>
  );
}

export default CardList;
