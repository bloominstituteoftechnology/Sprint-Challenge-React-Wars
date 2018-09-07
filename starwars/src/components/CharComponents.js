import React from 'react';

const CharComponents = props => (
  <div>
    {this.starwarsChar.map(char => {
      return (
        <div key={char.name}>
          {char.name} {char.birth_year} {char.gender}
        </div>
      );
    })}
  </div>
);

export default CharComponents;
