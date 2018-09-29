import React from 'react';
import './StarWars.css';


class CharacterCard extends React.Component {

  render() {
    if (this.props.charList.length < this.props.currentChar + 1) {
      return (
        <div className="CharacterCard" >
        </div>
      );
    } else {
      const charItem = this.props.charList[this.props.currentChar];
      return (
        <div className="CharacterCard" >
          <p>Name: <span>{charItem.name}</span></p>
          <p>Birth year: <span>{charItem.birth_year}</span></p>
          <p>Gender: <span>{charItem.gender}</span></p>
          <p>Height: <span>{charItem.height}</span></p>
          <p>Mass: <span>{charItem.mass}</span></p>
          <p>Hair color: <span>{charItem.hair_color}</span></p>
          <p>Eye color: <span>{charItem.eye_color}</span></p>
          <p>Complexion: <span>{charItem.skin_color}</span></p>
        </div>
      );
    }
  }
}

export default CharacterCard;
