import React from "react";

function StarwarsChar(props) {
  return (
    <div className="card" name={props.starwarsChar.name}>
      <h1>{props.starwarsChar.name}</h1>
      <h3>
        Birth Year: <span>{props.starwarsChar.birth_year}</span>
      </h3>
      <h3>
        Eye Color: <span>{props.starwarsChar.eye_color}</span>
      </h3>
      <h3>
        Gender: <span>{props.starwarsChar.gender}</span>
      </h3>
      <h3>
        Hair Color: <span>{props.starwarsChar.hair_color}</span>
      </h3>
      <h3>
        Height: <span>{props.starwarsChar.height}</span>
      </h3>
      <h3>
        Mass: <span>{props.starwarsChar.mass}</span>
      </h3>
      <h3>
        Skin Color: <span>{props.starwarsChar.skin_color}</span>
      </h3>
    </div>
  );
}
