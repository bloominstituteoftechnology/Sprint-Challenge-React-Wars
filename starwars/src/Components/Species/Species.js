import React, { Component } from 'react';
import './Species.css';

class Species extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: {}
    };
  }
  
  componentDidMount() {
    fetch(this.props.data)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ species: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
        <div>
        </div>
    );
  }
}

export default Species;