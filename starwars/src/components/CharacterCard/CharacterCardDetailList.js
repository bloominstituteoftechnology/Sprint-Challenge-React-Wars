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
  console.log('charDetails', charDetails);

  return(
    <ul className="character-card__details">
      {charDetails.map((detail, index) => {
        return <CharacterCardDetail 
          key={detail.id} 
          id={detail.id}
          detailName={detail[0]}
          detailValue={detail[1]}
        />;
      })}
    </ul>
  );
};

export default CharacterCardDetailList;