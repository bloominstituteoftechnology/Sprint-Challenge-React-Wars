import React from 'react';
import './Buttons.css';

const PrevButton = (props) => {
  return (
    <button type="submit" onClick={props.previousPage}>Previous</button>
  );
}

export default PrevButton;
