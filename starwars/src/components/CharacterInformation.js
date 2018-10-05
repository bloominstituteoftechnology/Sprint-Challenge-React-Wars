import React from "react";

const CharacterInformation = props => {
  return (
    <div className="characterInformation">
      <div className="left">
        <ul className="characterDetailList">
          <li className="characterDetail">Gender: {props.details.gender}</li>
          <li className="characterDetail">Birth Year: {props.details.birth_year}</li>
          <li className="characterDetail">Height: {props.details.height} cm</li>
          <li className="characterDetail">Weight: {props.details.mass} kg</li>
        </ul>
      </div>

      <div className="right">
        <ul className="characterDetailList">
          <li className="characterDetail">Eye Color: {props.details.eye_color}</li>
          <li className="characterDetail">Hair Color: {props.details.hair_color}</li>
          <li className="characterDetail">Skin Color: {props.details.skin_color}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterInformation;
