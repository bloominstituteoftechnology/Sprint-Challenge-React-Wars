import React from 'react';

// components
import CharData from './CharData';

const CharContainer = props => {
  return (
    <div className='char-card-container'>
      <CharData charData={ props.charData } />
    </div>
  );
};

export default CharContainer;