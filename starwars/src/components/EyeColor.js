import React from 'react';
import './StarWars.css';

const EyeColor = props => {
  return <div className="square">
            <div className="char-names">
              <h4>{props.eyes.name}: </h4>
            </div>
            <div className="eyes">
              <h4>{props.eyes.eye_color}</h4>
            </div>
         </div>
}

export default EyeColor;
