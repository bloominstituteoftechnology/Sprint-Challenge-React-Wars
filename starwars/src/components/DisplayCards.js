import React from "react";
import Characters from "./Characters";

const DisplayCards = props => {
  return (
    <section className="card">
      {props.characters.map(character => (
        <Characters characters={character} />
      ))}
    </section>
  );
};

export default DisplayCards;
