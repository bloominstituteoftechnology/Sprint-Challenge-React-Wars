import React from "react";

const Character = props => {
  return (
    <div className='char-container'>
    <div className="character">
      <div className="character-name"> 
      <ul>
      <li>{props.character.name}</li>
      </ul>
      </div>
      <div className="character-data">
       <span>Gender:</span> {props.character.gender}<br>
       </br>
       <span>Birth Year:</span> {props.character.birth_year}<br>
       </br>
       <span>Height:</span> {props.character.height}<br>
       </br>
       <span>Mass:</span> {props.character.mass}<br>
       </br>
       <span>Homeworld:</span> {props.character.homeworld}
      </div>
    </div>
    </div>

  );
};
export default Character;