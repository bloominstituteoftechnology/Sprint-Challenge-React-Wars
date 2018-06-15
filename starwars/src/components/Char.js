import React from "react";

const Char = props => {
  return (
    <div>
      Name: {props.swChar.name} Height: {props.swChar.height}
    </div>
  );
};

export default Char;
