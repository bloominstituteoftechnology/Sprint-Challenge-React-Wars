import React from 'react';
import './Name.css';

const Name = (props) => {
  return (
    <h3 className="Name">{props.name}</h3>
  );
}

export default Name;