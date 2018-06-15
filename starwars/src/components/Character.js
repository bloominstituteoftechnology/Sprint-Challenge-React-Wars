import React from 'react';

class Character extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    alert(this.props.character.name);
  };

  render() {
    return (
      <div className="container">
        <img
          src={`${window.location.origin}/img/${this.props.img}.jpg`}
          alt={this.props.character.name}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Character;
