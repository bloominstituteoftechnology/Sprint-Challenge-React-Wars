import React from "react";

const CharacterInformation = props => {
  return (
    <div className="characterInformation">
      <div className="left">
        <ul className="characterDetailList">
          <li className="characterDetail">Gender: <span className='characterDetailAnswer'>{props.details.gender}</span></li>
          <li className="characterDetail">Birth Year: <span className='characterDetailAnswer'>{props.details.birth_year}</span></li>
          <li className="characterDetail">Height: <span className='characterDetailAnswer'>{props.details.height} cm</span></li>
          <li className="characterDetail">Weight: <span className='characterDetailAnswer'>{props.details.mass} kg</span></li>
        </ul>
      </div>

      <div className="right">
        <ul className="characterDetailList">
          <li className="characterDetail">Eye Color: <span className='characterDetailAnswer'>{props.details.eye_color}</span></li>
          <li className="characterDetail">Hair Color: <span className='characterDetailAnswer'>{props.details.hair_color}</span></li>
          <li className="characterDetail">Skin Color: <span className='characterDetailAnswer'>{props.details.skin_color}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterInformation;
