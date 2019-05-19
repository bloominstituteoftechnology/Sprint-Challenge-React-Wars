import React from 'react';
import StarWars from './StarWars';
import './StarWars.css'


function StarWarsCharacter(props) {
  
    return (
      //<div>
      //   <h2>{props.starwarsChars.name}</h2>
      //   <p>
      //       <strong>Home World:</strong>{props.starwarsChars.homeworld};
      //   </p>
      //   <p>
      //       <strong>Species:</strong>{props.starwarsChars.species};
      //   </p>
      //   <p>
      //       <strong>Mass:</strong>{props.starwarsChars.mass};
      //   </p>
      // </div>


<div className="starwarsChars">
      {props.starwarsChars.map(character =>(<StarWars character={character} key={character.key}/> ) )}
      </div>
    )
  
}

export default StarWarsCharacter;
