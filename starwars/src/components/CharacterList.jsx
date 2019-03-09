import React from "react";
import CharData from "./CharData";

export default function CharacterList(props) {
  return (
    <div className="character-list">
      {props.starwarsChars.map(dataValue => {
        return <Data data={dataValue} />;
      })}
    </div>
  );
}