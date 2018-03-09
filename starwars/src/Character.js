import React, { Component } from 'React';

export default class Character extends Component {
  contructor(props) {
    super(props);
    this.state = {
      character: {},
    };
  }

  componentDidMount() {
    this.setState({character: this.props.character});
  }

  render() {
    return (
      <div>{this.state.character.name}</div>
    )
  }
};
