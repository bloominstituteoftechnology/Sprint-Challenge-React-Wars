import React from 'react';
import StarWarsPeeps from './StarWarsPeeps.js';

const CharIndex = props => {
      return (
        <div className = "char-index" > 
            {props.starwarsChars.map( jedi => (
                <StarWarsPeeps key={jedi.name} jedi={jedi} height={jedi.height} birthday={jedi.birth_year}/>))}
        </div>
    );
};

export default CharIndex;
