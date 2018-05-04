import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Char = ({ charImageObj, handleOpen }) => 
  <div className="char-img-div"> 
    <img key={charImageObj.name} src={`${charImageObj.imgUrl}`} onClick={() => handleOpen(charImageObj.name)}/>
  </div>

Char.propTypes = {
  charImageObj: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired
}

export default Char;
