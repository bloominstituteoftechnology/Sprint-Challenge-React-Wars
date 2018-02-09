import React, { Component } from "react";
import "./Homeworld.css";

class Homeworld extends Component {
  constructor() {
    super();
    this.state = {
      home: {}
    };
  }

  componentDidMount() {
    fetch(this.props.home)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ home: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className="Home">
        <div>
          <span>Home Planet</span>
        </div>
        <hr />
        <div className="Home__features">
          <div>Name: {this.state.home.name}</div>
          <div>Climate: {this.state.home.climate}</div>
          <div>Diameter: {this.state.home.diameter}</div>
          <div>Gravity: {this.state.home.gravity}</div>
          <div>Orbital Period: {this.state.home.orbital_period}</div>
          <div>Population: {this.state.home.population}</div>
          <div>Rotation Period: {this.state.home.rotation_period}</div>
          <div>Surface Water: {this.state.home.surface_water}</div>
          <div>Terrain: {this.state.home.terrain}</div>
        </div>
      </div>
    );
  }
}

export default Homeworld;
