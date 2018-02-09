import React from 'react';

const styledCharacter = {
  display: 'flex',
  textAlign:'center',
  width: '33%',
  maxWidth: '350px',
  flexDirection: 'column',
  flexWrap:'wrap',
  border: '1.5px solid black',
  borderRadius: '20px',
  margin: '20px',
  padding:'15px 0',
  background: '#C3C3C3',
  opacity: '0.9',
  lineHeight: '150%',
}

function People ({character}) {
  return (
    <div className="character" style={styledCharacter}>
      <div className="name">
        <strong>Name:</strong> {character.name}
      </div>
      <div className="birth_year">
        <strong>Birth Year:</strong> {character.birth_year}
      </div>
      <div className="gender">
        <strong>Gender:</strong> {character.gender}
      </div>
      <div className="eye_color">
        <strong>Eye Color:</strong> {character.eye_color}
      </div>
      <div className="hair_color">
        <strong>Hair Color:</strong> {character.hair_color}
      </div>
      <div className="height">
        <strong>Height:</strong> {character.height}
      </div>
      <div className="mass">
        <strong>Mass:</strong> {character.mass}
      </div>
      <div className="skin_color">
        <strong>Skin Color:</strong> {character.skin_color}
      </div>
    </div>
  )
}

export default People;