import React, { Component } from "react";

class Homeworlds extends Component {
  constructor() {
    super();
    this.state = {
      homeworld: {}
    };
  }

  componentDidMount() {
    fetch(this.props.homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="d-inline-block">
          {this.state.homeworld.name}
      </div>
    );
  }
}

export default Homeworlds;