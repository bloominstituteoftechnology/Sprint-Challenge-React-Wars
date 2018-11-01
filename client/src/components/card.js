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

// import React from 'react';
// import './StarWars.css';
// const CardInfo = (props) => {
//   return (
//     <div className="card-info">
//       <p className="name">{props.name}</p>
//       <p>Height: {props.height} cm</p>
//       <p>Mass: {props.mass} kg</p>
//       <p>Hair Color: {props.hair_color}</p>
//       <p>Skin Color: {props.skin_color}</p>
//       <p>Eye Color: {props.eye_color}</p>
//       <p>Birth Year: {props.birth_year}</p>
//       <p>Gender: {props.gender}</p>
//     </div>
//   )
// }
// export default CardInfo;

// import React from 'react';
// import './StarWars.css';
// import CardInfo from './CardInfo';
// const Card = (props) => {
//   return (
//     <div className="card-container">
//       {props.starwarsChars.map(data => {
//         return <CardInfo
//           key={data.created}
//           name={data.name}
//           height={data.height}
//           mass={data.mass}
//           hair_color={data.hair_color}
//           skin_color={data.skin_color}
//           eye_color={data.eye_color}
//           birth_year={data.birth_year}
//           gender={data.gender}
//         />
//       })}
//     </div>
//   )
// }
// export default Card;
