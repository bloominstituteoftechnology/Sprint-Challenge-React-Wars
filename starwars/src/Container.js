import React from 'react';
import './Container.css';
import pictures from './pictures';

function Container(props) {
  return(
    <div className="container">
      <div className="container__topRow">        {/* top row */}
        <div>Star Wars</div>
        <div>Character License</div>
      </div>
      <div className="container__middleRow">        {/* middle row */}
        <img src={pictures[props.index].picture} alt={props.charInfo.name} />
        <div className="container__middleRow-right">          {/* center start */}
          <div><b>Name:</b> {props.charInfo.name}</div>
          <div><b>YOB:</b> {props.charInfo.birth_year}</div>
          <div><b>Gender:</b> {props.charInfo.gender}</div>
          <div><b>Eye Color:</b> {props.charInfo.eye_color}</div>
          <div><b>Hair Color:</b> {props.charInfo.hair_color}</div>
          <div><b>Skin:</b> {props.charInfo.skin_color}</div>
          <div><b>Height:</b> {props.charInfo.height}</div>
          <div><b>Mass:</b> {props.charInfo.mass}</div>
        </div>          {/* center end */}
      </div>
      <div className="container__bottomRow">        {/* bottom row */}
        <div><b>created:</b> {props.charInfo.created}</div>
        <div><b>edited:</b> {props.charInfo.edited}</div>
      </div>
    </div>
  );
}

export default Container;
