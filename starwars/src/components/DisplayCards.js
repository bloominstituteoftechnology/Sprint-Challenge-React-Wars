import React from "react";
import Characters from "./Characters";

const DisplayCards = props => {
  return (
    <section >
     
      {props.characters.map(character => (
        <div className="card"> <Characters characters={character} />  </div>
      ))}
     
    </section>
  );
};

export default DisplayCards;
