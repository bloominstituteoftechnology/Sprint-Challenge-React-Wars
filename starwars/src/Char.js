import React, { Component } from 'react';

const Char = ({ charImageObj, handleOpen }) => 
  <div className="char-img-div"> 
    <img key={charImageObj.name} src={`${charImageObj.imgUrl}`} onClick={() => handleOpen(charImageObj.name)}/>
  </div>

export default Char;
