import React from 'react';
import Character from './Character';
import uuid from 'uuid/v1';

const ListCharacter = props =>
  props.characters.map((c, i) => (
    <Character key={uuid()} character={c} img={i} />
  ));

export default ListCharacter;
