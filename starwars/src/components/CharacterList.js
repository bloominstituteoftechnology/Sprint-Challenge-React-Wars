import React from 'react';
import Char from './Char';

const CharacterList = props => {
  let list = props.listItems;

  return (
    <ul>{list.map( item =>  <Char key={item.name} item = {item} />)}</ul>
  )
};

export default CharacterList;
