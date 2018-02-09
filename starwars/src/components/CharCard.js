import React, { Component } from 'react';
import styled from 'styled-components';

const CharStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  height: 200px;
  padding: 15px;
  font-size: 0.8rem;
  background: rgba(176, 138, 49, 0.5);
  border-radius: 2%;

  div {
    margin: 5px;
  }
`;

class CharCard extends Component {
  render() {
    return (
      <CharStyles >
        <h4 className="name">{this.props.char.name}</h4>
        <div className="gender">Gender: {this.props.char.gender}</div>
        <div className="height">Height: {this.props.char.height}cm</div>
        
        <div className="birth_year">Birth Year: {this.props.char.birth_year}</div>
        {/* <div className="created">{this.props.char.created}</div> */}
        {/* <div className="edited">{this.props.char.edited}</div> */}
        <div className="eye_color">Eye Color: {this.props.char.eye_color}</div>
        {/* {this.props.char.films} */}
        <div className="homeworld">Homeworld: {this.props.char.homeworld}</div>
        <div className="mass">Mass: {this.props.char.mass}kg</div>
        <div className="skin_color">Skin Color: {this.props.char.skin_color}</div>
        {/* {this.props.char.species} */}
        {/* {this.props.char.starships} */}
        {/* {this.props.char.vehicles} */}
      </CharStyles >
    );
  }
}

export default CharCard;