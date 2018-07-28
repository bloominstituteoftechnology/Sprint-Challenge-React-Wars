import React from 'react';

import StarwarsChar from './StarwarsChar';

const CharList = props => {
  return (
    <div>
        
      {props.starwarsChars.map(starwarsChar => (
        <StarwarsChar
        //   handleToggleComplete={props.handleToggleComplete}
          key={starwarsChar} //.name?
          starwarsChar={starwarsChar}
        />
      ))}
      
    </div>
  );
};

export default CharList;