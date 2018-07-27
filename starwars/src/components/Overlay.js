import React from 'react';
import './StarWars.css';

const Overlay = (props) => {
  return (
    <div className={`overlay ${!props.overlay ? 'hide' : null}` }>
      <h1> Hello! Click the button to learn some stuff!</h1>
      <button onClick={props.overlayClick}> Star Wars Characters Info </button>
    </div>
  )
}

export default Overlay;
