import React, { Component } from 'react';
import './CharCard.css'

class CharCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    console.log(this.props, "props")  
    console.log(this.props.appState, "app State")
    console.log(this.props.appState.starwarsChars[this.props.appState.selected], "SW array first element")
  
    return ( 
      <div className="char-card">
        <h1>{this.props.headerName}</h1>
        <p>{`Name:       ${this.props.appState.starwarsChars[this.props.appState.selected].name}`}</p>
        <p>{`Height:     ${this.props.appState.starwarsChars[this.props.appState.selected].height}`}</p>
        <p>{`Mass:       ${this.props.appState.starwarsChars[this.props.appState.selected].mass}`}</p>
        <p>{`Birth Year: ${this.props.appState.starwarsChars[this.props.appState.selected].birth_year}`}</p>
        <p>{`Hair Color: ${this.props.appState.starwarsChars[this.props.appState.selected].hair_color}`}</p>
        <p>{`Eye Color:  ${this.props.appState.starwarsChars[this.props.appState.selected].eye_color}`}</p>
      </div>      
     )
  
  }

}
export default CharCard