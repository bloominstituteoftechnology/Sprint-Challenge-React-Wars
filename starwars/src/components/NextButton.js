import React from 'react';
import './Buttons.css';

const NextButton = (props) => {
  return (
    <button type="submit" onClick={props.nextPage}>Next</button>
  );
}

export default NextButton;
