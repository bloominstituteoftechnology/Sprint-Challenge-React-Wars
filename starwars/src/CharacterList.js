import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

export const CharacterList = (props) => {
  const {characters} = props;
  return (
    <div>
      {props.characterList.map((characters, index) => {
        return <Character key={index} characters={characters}  />
      })}
    </div>
  )
};



export default CharacterList;
