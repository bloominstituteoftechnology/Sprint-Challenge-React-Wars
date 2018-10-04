import React from 'react';
import './App.css';

const ListItem = props => {
 
  return (
    <div className="character-preview" onClick={() => props.showCurrentChar(props.char.name)}>
      {props.char.name}
    </div>
  );
};


export default ListItem;