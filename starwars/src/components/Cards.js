import React from "react";
import Card from "./Card";

//TodoList
const Cards = props => {
  return (
    <div className="containerDiv">
      {props.starwarsChars.map(newChar => (
        <Card
            handleToggle = {props.handleToggle}
            key = {newChar.created}
            thisChar = {newChar}
            open = {props.open}
        />
      ))}
    </div>
  );
};

export default Cards;