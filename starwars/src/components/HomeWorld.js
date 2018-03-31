import React, { Component } from 'react';

class HomeWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeworld: {},
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => { 
        return res.json() 
      })
      .then(data => {
        this.setState({ homeworld: data })
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return this.state.homeworld.name !== undefined ? this.state.homeworld.name : "unknown";
  }
}

export default HomeWorld;