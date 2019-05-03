import React from 'react';
import StarWarsList from './components/StarWarsList';

const StarWars = props => {
  return (
    <div>
      {props.starwarsChars.map(char => (
        <StarWarsList
          key={char.name}
          char={char}
        />
      ))};
    </div>
  );
};

export default StarWars;