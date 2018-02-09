import React from 'react';

const styles = {
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  border: '1px solid black',
  margin: '20px',
}

function People ({character}) {
  return (
    <div className="character" style={styles}>
      <div className="name">
        Name: {character.name}
      </div>
      <div className="birth_year">
        Birth Year: {character.birth_year}
      </div>
      <div className="gender">
        Gender: {character.gender}
      </div>
      <div className="eye_color">
        Eye Color: {character.eye_color}
      </div>
      <div className="hair_color">
        Hair Color: {character.hair_color}
      </div>
      <div className="height">
        Height: {character.height}
      </div>
      <div className="mass">
        Mass: {character.mass}
      </div>
      <div className="skin_color">
        Skin Color: {character.skin_color}
      </div>
    </div>
  )
}

export default People;