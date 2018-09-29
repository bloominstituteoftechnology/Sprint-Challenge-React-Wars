import React from 'react';

const CharInfo = (props) => {
  return (
    <div className='charInfo'>
      <p>{props.facts.birth_year}</p>
    </div>
  )
}

export default CharInfo;
