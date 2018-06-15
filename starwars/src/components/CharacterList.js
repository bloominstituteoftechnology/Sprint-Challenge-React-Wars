import React from 'react';
import Char from './Char';

const CharacterList = props => {
  let list = props.listItems;

  return (
    <div className="card-container">{list.map( item =>  <Char key={item.name} item = {item} />)}</div>
  )
};

export default CharacterList;
