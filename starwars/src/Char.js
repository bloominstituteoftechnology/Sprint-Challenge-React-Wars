import React, { Component } from 'react';

const Char = ({ charImage }) => 
  <div className="char-list">
    {charImage.map((obj) => 
      <img key={obj.name} src={`${obj.imgUrl}`}/>
    )}
  </div>

export default Char;
