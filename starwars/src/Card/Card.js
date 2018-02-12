import React from 'react';
import './Card.css';

function GridItem(props) {
  return (
    <div className="col-md-4 grid-item d-flex flex-column text-center">
      <span className="grid-item__span">
        {props.char.name}
      </span>
      <span className="grid-item__span">
        {props.char.name}
      </span>
      <span className="grid-item__span">
        {props.char.name}
      </span>
      <span className="grid-item__span">
        {props.char.name}
      </span>
      <span className="grid-item__span">
        {props.char.name}
      </span>
      <span className="grid-item__span">
        {props.char.name}
      </span>
      <span className="grid-item__span">
        {props.char.name}
      </span>
      {props.char.height}
      <span className="grid-item__span">{props.char.skin_color}</span>
    </div>
  );
}

export default GridItem;