import React, { Component } from 'react';
import CardBlockStyle from './cardblockstyle.js';

class CardBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardBlockStyle>
        <h2>{this.props.data.name}</h2>
        <img src='https://images.unsplash.com/photo-1486736065690-45e0655d038a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8417003192c1520308b460e9ae6ab4c4&auto=format&fit=crop&w=1050&q=80' alt='blank background' />
        <p>Gender: {this.props.data.gender}</p>
        <p>Height: {this.props.data.height} cm</p>
        <p>Weight: {this.props.data.mass} kg</p>
        <p>Hair: {this.props.data.hair_color}</p>
        <p>Complexion: {this.props.data.skin_color}</p>
      </CardBlockStyle>
    );
  }
}

export default CardBlock;
