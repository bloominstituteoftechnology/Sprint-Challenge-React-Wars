import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CharInfo = ({ char, imgUrl, handleBack }) => 
  <div className="char-info">
    <button onClick={() => handleBack()}>Back</button>
    <div className="card">
      <div className="card-img-div">
        <img src={`${imgUrl}`} />
      </div>
      <div className="card-content">
        <div className="name">{char.name}</div>
        <div className="height">{char.height}</div>
        <div className="gender">{char.gender === "n/a"? "":char.gender}</div>
        <div className="eye-color">{char.eye_color}</div>
        <div className="skin-color">{char.skin_color}</div>
      </div>
    </div>
    <div className="extra-info">
      <div>
        <h4>Appearance</h4>
        <div></div>
      </div>
      <div>
        <h4>Homeworld</h4>
        <div></div>
      </div>
      <div>
        <h4>Starships</h4>
        <div></div>
      </div>
      <div>
        <h4>Vehicles</h4>
        <div></div>
      </div>
    </div>
  </div>

CharInfo.propTypes = {
  imgUrl: PropTypes.string.isRequired, 
  handleBack: PropTypes.func.isRequired
}

export default CharInfo;
