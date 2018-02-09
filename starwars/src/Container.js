import React from 'react';
import './Container.css';

function Container(props) {
  return(
    <div className="container">
      <div className="container__topRow">        {/* top row */}
        <div>Star Wars</div>
        <div>Character License</div>
      </div>
      <div className="container__middleRow">        {/* middle row */}
        <div></div>
        <div>          {/* center start */}
          <div>Name: {props.charInfo.name}</div>
          <div>YOB: {props.charInfo.birth_year}</div>
          <div>
            <div>Gender: {props.charInfo.gender}</div>
            <div>Eye Color: {props.charInfo.eye_color}</div>
            <div>Hair Color: {props.charInfo.hair_color}</div>
            <div>Skin: {props.charInfo.skin_color}</div>
            <div>Height:{props.charInfo.height}</div>
            <div>Mass :{props.charInfo.mass}</div>
          </div>
        </div>          {/* center end */}
        <div></div>
      </div>
      <div className="container__bottomRow">        {/* bottom row */}
        <div>created: {props.charInfo.created}</div>
        <div></div>
        <div>edited: {props.charInfo.edited}</div>
      </div>
    </div>
  );
}

export default Container;
