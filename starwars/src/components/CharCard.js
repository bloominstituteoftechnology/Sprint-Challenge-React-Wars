import React, { Component } from 'react';
import styled from 'styled-components';

const CharStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;


`;

class CharCard extends Component {
  render() {
    return (
      <CharStyles >
        <h2 className="name">{this.props.char.name}</h2>
        <div className="gender">{this.props.char.gender}</div>
        <div className="height">{this.props.char.height}</div>
        
        <div className="year">{this.props.char.birth_year}</div>
        <div className="created">{this.props.char.created}</div>
        <div className="edited">{this.props.char.edited}</div>
        <div className="eye_color">{this.props.char.eye_color}</div>
        {/* {this.props.char.films} */}
        <div className="homeworld">{this.props.char.homeworld}</div>
        <div className="mass">{this.props.char.mass}</div>
        <div className="skin_color">{this.props.char.skin_color}</div>
        {/* {this.props.char.species} */}
        {/* {this.props.char.starships} */}
        {/* {this.props.char.vehicles} */}
      </CharStyles >
    );
  }
}

export default CharCard;