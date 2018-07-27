import React from "react";
import "./StarWars.css";

const CharacterCard = props => {
  const { name } = props.starwarsArray;
  const heightInFeetTotal = (props.starwarsArray.height * 0.393701) / 12;
  const feet = Math.floor(heightInFeetTotal);
  const inches = Math.round((heightInFeetTotal - feet) * 12);
  return (
    <div
      // style={
      //   props.todoDataProp.completed ? { textDecoration: "line-through", textDecorationColor: "#FF220C"} : null
      // }
      // onClick={() => props.handleToggleComplete(props.todoDataProp.id)}
    >
        <h2>{name}</h2>
        <h4>Height: {`${feet}' ${inches}"`}</h4>
    </div>
  );
};

export default CharacterCard;
