import React from "react";
import CharacterPage from './CharacterPage';

const CharList = props => {
  return (
    <div className='CharacterList'>
      {props.list.map((char, item) => (
        <CharacterPage
          key={item}
          charstat={char} />)
      )}
    </div>
  );
};

export default CharList;