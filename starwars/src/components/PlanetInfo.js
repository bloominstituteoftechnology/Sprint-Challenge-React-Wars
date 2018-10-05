import React from 'react';

const PlanetInfo = props => {
  const planet = props.homeworld.name

  return(
    <div className='planet'><p>From: {planet}</p></div>
  )
}

export default PlanetInfo;
