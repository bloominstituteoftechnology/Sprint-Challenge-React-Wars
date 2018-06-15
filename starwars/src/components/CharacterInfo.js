import React from 'react';

const CharacterInfo = props => {
  /* prettier-ignore */
  let {height, hair_color, skin_color, eye_color, birth_year, gender} = props.character;
  return (
    <div>
      <li>Height: {height}</li>
      <li>Hair: {hair_color}</li>
      <li>Skin: {skin_color}</li>
      <li>Eye: {eye_color}</li>
      <li>Birthyear: {birth_year}</li>
      <li>gender: {gender}</li>
    </div>
  );
};

export default CharacterInfo;
