import React from "react";

function Char(props) {
  return (
    <div className="char">
      <p className="list-number">{props.listNumber}.&nbsp;</p>
      <p>{props.char}</p>
    </div>
  );
}

export default Char;
