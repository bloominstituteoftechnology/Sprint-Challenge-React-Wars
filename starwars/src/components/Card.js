import React from "react";

function Card(props) {
  return (
    <ul className="char-card">
      <li>
        Hello, my name is:
        {props.card.name}
      </li>
      <li>
        My birthyear is
        {props.card.birth_year}
      </li>
      <li>
        {" "}
        I was created on:
        {props.card.created}
      </li>
      <li>I was last edited on: {props.card.edited}</li>
      <li>My eye color is: {props.card.eye_color}</li>
      <li>My gender is: {props.card.gender}</li>
      <li>My hair color is: {props.card.hair_color}</li>
      <li>My height is: {props.card.height}</li>
      {/* <li>My homeworld is: {props.card.homeworld}</li> */}
      <li>My mass is: {props.card.mass}</li>
      <li>My skin color is: {props.card.skin_color}</li>
      {/* <li>My species is: {props.card.species}</li> */}
      {/* <li>My starships are: {props.card.starships}</li> */}
    </ul>
  );
}

export default Card;
