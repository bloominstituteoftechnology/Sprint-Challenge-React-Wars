import React from 'react';
import StarWarsCharacter from './StarWarsCharacter';

const StarWarsList = (props) => {
  return (
    <div>
      {props.characters.map(character =>
        <StarWarsCharacter
          key={character.created}
          bio={character}
        />
      )}
    </div>
  );
};

export default StarWarsList;