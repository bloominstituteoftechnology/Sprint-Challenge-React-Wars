import React from "react";

function Card(props) {
  return (
    <ul>
      <li>
        Hello, your name is:
        {props.char.name}
      </li>
    </ul>
  );
}

export default Card;
