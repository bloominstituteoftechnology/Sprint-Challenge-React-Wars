import React from 'react';
import Character from './Character';
import uuid from 'uuid/v1';

const ListCharacter = props =>
  props.characters.map(c => <Character key={uuid()} character={c} />);

export default ListCharacter;
