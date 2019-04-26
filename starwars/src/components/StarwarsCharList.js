import React from "react";

export default function Character(props) {
  return (
    <div className="classNames">
      <h3>{props.character.name}</h3>
    </div>
  );
}