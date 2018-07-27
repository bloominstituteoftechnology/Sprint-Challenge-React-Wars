import React from 'react';
import './StarWars.css';

const CardImgs = props => {
  return <img src={`${props.url}`} alt="hello"/>
};


export default CardImgs;