import React, { Component } from 'react';
import CardBlockStyle from './cardblockstyle.js';

class CardBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardBlockStyle>
        <h1>CARD</h1>
      </CardBlockStyle>
    );
  }
}

export default CardBlock;
