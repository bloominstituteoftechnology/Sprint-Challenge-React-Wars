import React from "react";


export default function StarwarsCharList(props) {
  return (
    <div className="starwars-char-list box">
        <p className="character-name">{props.character.name}</p>
    </div>
  );
}

