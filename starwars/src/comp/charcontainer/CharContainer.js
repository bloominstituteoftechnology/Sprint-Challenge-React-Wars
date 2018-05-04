import React from 'react';

// components
import CharData from './CharData';

const CharContainer = props => {
  return (
    <div className='char-card-container'>

      {
        props.charData.map((char, ind) => {
          return (
            <CharData
              key={ ind * Date.now() }
              name={ char.name }
              gender={ char.gender }
              birthYear={ char.birth_year }
              eyeColor={ char.eye_color }
              hairColor={ char.hair_color }
              height={ char.height }
              mass={ char.mass }
              skinColor={ char.skin_color }
            />
          )
        })
      }

    </div>
  );
};

export default CharContainer;