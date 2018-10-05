import React from 'react';
import './Button.css';

const Button = props => {
  return (
    <button
      onClick={props.handleButtonClick}
      className="Button"
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
};

export default Button;
