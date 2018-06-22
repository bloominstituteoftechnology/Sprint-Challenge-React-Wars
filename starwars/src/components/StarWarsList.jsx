import React from 'react';
import Character from './Character';

const StarWarsList = (props) => {
  return (
    <div>
      {props.starwarsChars.map((char) => (
        <Character name={char.name} birthday={char.birth_year} eye={char.eye_color} char={char} />
      ))}
    </div>
  );
};
export default StarWarsList;
