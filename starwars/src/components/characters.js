import React from "react";
import "./StarWars.css";

const Characters = props => {
  return (
    <div className="char-container">
      {props.chars.map((char, i) => (
        <div className="card" key={i}>
          <h2>{char.name}</h2>
          <div className="img-container">
            <img src={char.img} alt={char.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
