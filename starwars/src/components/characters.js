import React from "react";
import "./StarWars.css";

const Characters = props => {
  return (
    <div className="char-container">
      {props.chars.map((char, i) => (
        <div   className={char.darkside ? "card darkside": 'card'} key={i}>
        <a target="_blank"  href={char.url}>
          <h2>{char.name}</h2>
          <div className="img-container">
            <img src={char.img} alt={char.name} />
          </div></a>
        </div>
      ))}
    </div>
  );
};

export default Characters;
