import React from "react";
import "./Char.css";

function Char(props) {
  return (
    <div className="char">
      <p className="list-number">{props.listNumber}.&nbsp;</p>
      <p>{props.char.name}</p>
    </div>
  );
}

export default Char;
