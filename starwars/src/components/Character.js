import React from 'react';
import './character.css';

class Character extends React.Component {
  render() {
    return (
      <div className="character">
        <h3>Name: {this.props.name}</h3>
        <p>Gender: {this.props.gender}</p>
        <p>Birth Year: {this.props.birthYear}</p>
        <p>Height: {this.props.height}</p>
        <p>Mass: {this.props.mass}</p>
      </div>
    );
  }
}

export default Character;