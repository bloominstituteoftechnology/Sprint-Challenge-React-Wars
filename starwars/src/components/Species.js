import React from 'react';

const Species = props => {
  const name = props.species

  return(
    <div className='species'><p>Species: {name}</p></div>
  )
}

export default Species;
