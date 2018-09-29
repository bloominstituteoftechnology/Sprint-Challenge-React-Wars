import React, { Component } from "react";
import "../style/Card.css";

class Bio extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="cardWrapper">
          <div className="cardRow">
            <h2 className="alignCenter">Picture:</h2>{" "}
          </div>
          <div className="cardRow">
            <img
              src={this.props.somestuff.image}
              alt={this.props.somestuff.id}
            />
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Name:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.name}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Birth year:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.birth_year}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Eye color:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.eye_color}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Gender:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.gender}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Hair Color:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.hair_color}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Height:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.height}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Mass:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.mass}</h2>
          </div>
          <div className="cardRow">
            <h2 className="alignRight">Skin Color:</h2>{" "}
            <h2 className="alignLeft">{this.props.somestuff.skin_color}</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Bio;
