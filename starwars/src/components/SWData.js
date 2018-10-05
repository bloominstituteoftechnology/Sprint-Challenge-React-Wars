import React from 'react';

const SWData = props => {
  return (
    <div className='sw-data'>
      <h2>{props.starwarsChars.name}<br/></h2>
      <span>Gender</span>: {props.starwarsChars.gender}<br/>
      <span>Birth Year</span>: {props.starwarsChars.birth_year}<br/>
      <span>Height</span>: {props.starwarsChars.height}<br/>
    </div>
  );
};

export default SWData;