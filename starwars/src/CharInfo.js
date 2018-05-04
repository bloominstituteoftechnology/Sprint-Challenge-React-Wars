import React, { Component } from 'react';

const CharInfo = ({ char, imgUrl }) => 
  <div className="char-info">
    <img src={`${imgUrl}`} />
    <div className="card">
      <div>{char.name}</div>
      <div>{char.height}</div>
      <div>{char.gener}</div>
      <div>{char.height}</div>
      <div>{char.eye_color}</div>
      <div>{char.skin_color}</div>
    </div>
    <div className="extra-info">
      <div>
        <div>Appearance</div>
        <div>{char[0].films}</div>
      </div>
      <div>
        <div>Homeworld</div>
        <div>{char[0].homeworld}</div>
      </div>
      <div>
        <div>Starships</div>
        <div>{char[0].starships}</div>
      </div>
      <div>
        <div>Vehicles</div>
        <div>{char[0].vehicles}</div>
      </div>
    </div>
  </div>

export default CharInfo;
