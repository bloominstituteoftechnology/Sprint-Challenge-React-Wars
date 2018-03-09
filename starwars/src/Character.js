import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';


export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],

    };
  }

  componentDidMount() {
    this.setState({
      character: this.props.character,
    });
  }

  render() {
    return (
      <div>
        {this.state.character.name}
        {this.state.characterList}
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
    films: PropTypes.arrayOf(PropTypes.string)
  })
};
