import React from "react";
import CharMovies from "./CharMovies";

const Chars = props => {
  return (
    <div>
      {props.name.name}, {props.name.mass}
    </div>
  );
};

export default Chars;
