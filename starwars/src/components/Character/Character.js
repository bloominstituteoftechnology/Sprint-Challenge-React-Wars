import React from 'react';
import './Character.css';

const Character = (props) => {
  return (
    <div className='Character'>
      <div className='charName'>{props.charData.name}</div>
      <div className='charData'>
        Born: {props.charData.birth_year}
      </div>
    </div>
  )
}

export default Character;