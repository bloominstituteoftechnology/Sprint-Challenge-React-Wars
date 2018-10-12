import React from 'react';

const Chars = props => {
  return (
    <div>
      <ul>
        {props.starwarsChars.map((char, i) => {
          return (<li>{char}</li>);
        }
      </ul>
    </div>
  )
)
  
};


export default Chars;