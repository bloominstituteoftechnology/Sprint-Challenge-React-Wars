import React, { Component } from "react";
import "./Species.css";

class Species extends Component {
  constructor() {
    super();
    this.state = {
      race: {}
    };
  }

  componentDidMount() {
    fetch(this.props.race)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ race: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="Race">
        <div>Species</div>
        <hr />
        <div className="Race__features">
          <div>Name: {this.state.race.name}</div>
          <div>Average Height: {this.state.race.average_height}</div>
          <div>Average Lifespan: {this.state.race.average_lifespan}</div>
          <div>Classification: {this.state.race.classification}</div>
          <div>Designation: {this.state.race.designation}</div>
          <div>Eye colors: {this.state.race.eye_colors}</div>
          <div>Hair Colors: {this.state.race.hair_colors}</div>
          <div>Language: {this.state.race.language}</div>
          <div>Skin Colors: {this.state.race.skin_colors}</div>
        </div>
      </div>
    );
  }
}

export default Species;
