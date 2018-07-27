import React from "react";
import "./StarWars.css";

const CharacterCard = props => {
  const { name } = props.starwarsArray;
  return (
    <ul
      // style={
      //   props.todoDataProp.completed ? { textDecoration: "line-through", textDecorationColor: "#FF220C"} : null
      // }
      // onClick={() => props.handleToggleComplete(props.todoDataProp.id)}
    >
      <li>
        <h4>{name}</h4>
      </li>
    </ul>
  );
};

export default CharacterCard;
