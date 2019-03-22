import React from 'react';
import './Character.css';

const Character = props => {
  console.log(props.charProp);
  return(
    <div className="charSheet">
      {/* <img src={props.charProp.homeworld} /> */}
      <div className="list">
        <h3>{props.charProp.name}</h3>
          <div>Gender: {props.charProp.gender}</div>
          <div>Height: {props.charProp.height}</div>
          <div>Mass: {props.charProp.mass}</div>
          <div>Skin Color: {props.charProp.skin_color}</div>
          <div>Hair Color: {props.charProp.hair_color}</div>
          <div>Eye Color: {props.charProp.eye_color}</div>
      </div>
    </div>
  )
}

export default Character;
