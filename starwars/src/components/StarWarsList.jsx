import React from 'react';
import Character from './Character';

const StarWarsList = (props) => {
  return <div>{props.starwarsChars.map((char) => <Character key={char.name} char={char} />)}</div>;
};
export default StarWarsList;
//anytime you're rendering an array react wants a key for each element
//passing down each individual char
