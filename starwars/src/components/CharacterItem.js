import React from 'react';
import './StarWars.css';


class CharacterItem extends React.Component {

  pickHandlerHelper = (event) => {
    this.props.controller.pickHandler(event, this.props.index);
  };

  render() {
    return (
      <li className="CharacterItem" onClick={this.pickHandlerHelper} >
        {this.props.charItem.name}
      </li>
    );
  }
}

export default CharacterItem;
