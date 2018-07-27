import React from 'react';
import Character from './Character';
import uuid from 'uuid/v1';

const ListCharacter = props => {
  let buffer = props.indexStart;

  return props.characters.map((c, i) => (
    <Character key={uuid()} character={c} img={i + buffer} />
  ));
};

export default ListCharacter;
