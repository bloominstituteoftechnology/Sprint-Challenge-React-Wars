import React from 'react';

const CharContainer = props => {
  return (
    <div className='char-card-container'>
      
      {
        props.charData.map(char => {
          return (
            <div class="char-card-container__char-card">
              <h2>{ char.name }</h2>
              <p>{ char.gender }</p>
              <p>{ char.birth_year }</p>
              <p>{ char.eye_color }</p>
              <p>{ char.hair_color }</p>
              <p>{ char.height }</p>
              <p>{ char.mass }</p>
              <p>{ char.skin_color }</p>
            </div>
          )
        })
      }
      
    </div>
  );
};

export default CharContainer;