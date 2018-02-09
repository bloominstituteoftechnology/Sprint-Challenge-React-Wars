import React from 'react';

function People ({character}) {
  return (
    <div className="character">
      <div className="name">
        Name: {character.name}
      </div>
      <div className="birth_year">
        {character.birth_year}
      </div>
      <div className="gender">
        {character.gender}
      </div>
      <div className="eye_color">
        {character.eye_color}
      </div>
      <div className="hair_color">
        {character.hair_color}
      </div>
      <div className="height">
        {character.height}
      </div>
      <div className="mass">
        {character.mass}
      </div>
      <div className="skin_color">
        {character.skin_color}
      </div>
    </div>
  )
}

export default People;