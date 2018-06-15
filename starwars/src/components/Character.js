import React from 'react';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = character => {
    alert(character.name);
  };

  render() {
    return (
      <div>
        <img
          src={`${window.location.origin}/img/${this.props.img}.jpg`}
          alt={this.props.character.name}
          onClick={() => this.handleClick(this.props.character)}
          title={this.props.character.name}
        />
      </div>
    );
  }
}

export default Character;
