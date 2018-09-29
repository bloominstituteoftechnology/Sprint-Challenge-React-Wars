import React from 'react';

const CharList = (props) => {
  return (
    <div className={charList}>
      {this.props.starwarsChars.map(char => {
        return <CharCard
                  key={char.created}
                  character={char} />
      })}
    </div>
  )
}

export default CharList;
