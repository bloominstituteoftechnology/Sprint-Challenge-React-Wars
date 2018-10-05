import React from 'react';
import CharactersList from './CharactersList';

const SocialCard = props => {
  return (
    <div>
      <CharactersList starwarsChars={props.starwarsChars}/>
    </div>
  );
}
export default SocialCard;