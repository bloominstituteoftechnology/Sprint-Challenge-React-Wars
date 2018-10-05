import React from 'react';
import './Image.css';

const Image = props => {
  return <img src={props.dog} alt={props.id} className="Image" />;
};

export default Image;
