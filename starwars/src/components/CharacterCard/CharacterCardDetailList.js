import React from 'react';
import './CharacterCard.css';
import CharacterCardDetail from './CharacterCardDetail';

const CharacterCardDetailList = props => {
  const charDetails = Object.entries({
    'Gender': props.characterData.gender,
  'Birth Year': props.characterData.birth_year,
    'Eye Color': props.characterData.eye_color,
    'Hair Color': props.characterData.hair_color,
    'Height': props.characterData.height,
    'Mass': props.characterData.mass,
    'Skin Color': props.characterData.skin_color
  });

  return(
    <ul className="character-card__detail-list">
      {charDetails.map((detail, index) => {
        return <CharacterCardDetail 
          key={index} 
          id={index}
          detailName={detail[0]}
          detailValue={detail[1]}
        />;
      })}
    </ul>
  );
};

export default CharacterCardDetailList;