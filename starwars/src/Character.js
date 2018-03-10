import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';


export default class Character extends Component {
  constructor() {
    super();
    this.state = {
      character: [],

    };
  }

  componentDidMount() {
    this.setState({
      character: this.props.character,
      characterList: this.props.character.characterList
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.character.name}</div>
        <div>{this.state.character.height}</div>
        <div>{this.state.character.mass}</div>
        <div>{this.state.character.hair_color}</div>
        <div>{this.state.character.gender}</div>
        <div>{this.state.character.skin_color}</div>
        <div>{this.state.character.eye_color}</div>
      </div>
    )
  }
};

Character.propTypes = {
  starwarsChars: PropTypes.shape ({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    gender: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,

  })
};
