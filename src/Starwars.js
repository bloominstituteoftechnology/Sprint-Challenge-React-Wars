import React from 'react';
import pics from './Profile_Pics';
export const Starwars = props => {
  console.log(props);
  return (
    <div className={'big_starwars'}>
      {props.chars.map(char => {
        console.log(char);
        return (
          <div key={char.name}>
            <h2 className={'char_box_title'}>{char.name}</h2>
            <div className={'char_box'}>
              <div className={'char_name'}>
                <img src={pics[char.name]} alt={'alt'} />
              </div>
              <div className={'char_stats'}>
                <h3>Height: {char.height}</h3>
                <h3>Gender: {char.gender}</h3>
                <h3>Eyes: {char.eye_color}</h3>
                <h3>Hair: {char.hair_color}</h3>
                <h3>Skin: {char.skin_color}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
