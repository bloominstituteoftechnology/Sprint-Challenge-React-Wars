import React from 'react';
import SWData from './SWData';

const SWCard = props => {
  return (
    <div className='card-container'>
      {props.starwarsChars.map(char => (
        <SWData starwarsChars={char} key={char.name}/>
      ))}
    </div>
  );
};

export default SWCard;