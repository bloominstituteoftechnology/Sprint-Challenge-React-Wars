import React from 'react';

function StarWarsCharacter(props) {
  
    return (
      <div>
        <h2>{props.starwarsChar[0].name}</h2>
        <p>
            <strong>Home World:</strong>{props.starwarsChars.homeworld}
        </p>
        <p>
            <strong>Species:</strong>{props.starwarsChars.species}
        </p>
        <p>
            <strong>Mass:</strong>{props.starwarsChars.mass}
        </p>
      </div>
    )
  
}

export default StarWarsCharacter;
