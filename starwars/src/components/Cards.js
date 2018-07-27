import React from "react";
import Card from "./Card";

//TodoList
const Cards = props => {
  return (
    <div>
      {props.starwarsChars.map(newChar => (
        <Card
          key = {newChar.created}
          thisChar = {newChar}
        />
      ))}
    </div>
  );
};

export default Cards;