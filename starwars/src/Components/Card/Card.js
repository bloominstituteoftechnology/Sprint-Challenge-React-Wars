import React from 'react';

const Card = (props) => {
  const { characters } = props;

  return (
    <div>
      {characters.map(char => {
        return (
          <div className='box' key={char.name + 'Box'}>
            <h3 className='box__title'>{char.name}</h3>
            <div>
              <p>{'Gender: ' + char.gender}</p>
              <p>{'Born: ' + char.birth_year}</p>
              <p>{'Hair: ' + char.hair_color}</p>
              <p>{'Eyes: ' + char.eye_color}</p>
              <p>{'Skin: ' + char.skin_color}</p>
              <p>{'Height: ' + char.height + 'cm'}</p>
              <p>{'Mass: ' + char.mass + '?'}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;