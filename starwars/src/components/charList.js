import React from 'react';
import CharCard from './CharCard.js';

const CharList = (props) => {
  return (
    <div className='charList'>
      {this.props.starwarsChars.map(char => {
        return <CharCard
                  key={char.created}
                  character={char} />
      })}
    </div>
  )
}

export default CharList;
