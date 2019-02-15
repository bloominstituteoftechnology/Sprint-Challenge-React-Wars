import React from 'react';
import './Character.css'

class Character extends React.Component {
  render() {
    return (
      <div className="character">
        <div className="character-line-top"></div>
        <h2>{this.props.name}</h2>
        <div className="character-line-bottom"></div>
        <div className="character-facts">
        <ul>
          <li>Birth Year: {this.props.birthYear}</li>
          <li>Gender: {this.props.gender}</li>
          <li>Eye Color: {this.props.eyeColor}</li>
          <li>Hair Color: {this.props.hairColor}</li>
          <li>Height: {this.props.height}</li>
          <li>Mass: {this.props.mass}</li>
          <li>Skin Color: {this.props.skinColor}</li>
        </ul>
        </div>

      </div>
    )
  }
}

export default Character; 