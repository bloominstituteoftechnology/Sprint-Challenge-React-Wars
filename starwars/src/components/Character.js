import React from 'react';
import './Character.css'

class Character extends React.Component {
  render() {
    return (
      <div className="character">
        <h2>{this.props.name}</h2>
        <p>Birth Year: {this.props.birthYear}</p>
        <p>Gender: {this.props.gender}</p>
        <p>Eye Color: {this.props.eyeColor}</p>
        <p>Hair Color: {this.props.hairColor}</p>
        <p>Height: {this.props.height}</p>
        <p>Mass: {this.props.mass}</p>
        <p>Skin Color: {this.props.skinColor}</p>
      </div>
    )
  }
}

export default Character;