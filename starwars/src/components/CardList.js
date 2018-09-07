import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <ul>
      {props.chars.map(char => {
        return <Card char={char} />;
      })}
    </ul>
  );
}

export default CardList;
