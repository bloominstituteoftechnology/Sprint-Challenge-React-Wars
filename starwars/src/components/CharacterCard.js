import React from 'react';
import Character from './Character';

class CharacterCard extends React.Component {
  render() {
    // console.log(this.props.characters)
    return (
      <div className="character-container">
        {this.props.characters.map(character => 
        <Character 
          name={character.name}  
          key={character.created}
          birthYear={character.birth_year}
          eyeColor={character.eye_color}
          gender={character.hair_color}
          hairColor={character.hair_color}
          height={character.height}
          mass={character.mass}
          skinColor={character.skin_color}
        />)}
      </div>
    )
  }
}

export default CharacterCard;