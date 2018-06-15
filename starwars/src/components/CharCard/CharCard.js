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
        <h1>{this.props.appState.starwarsChars[this.props.appState.selected].name}</h1>
        <h4>{`Height:     ${this.props.appState.starwarsChars[this.props.appState.selected].height}`}    </h4>
        <h4>{`Gender:     ${this.props.appState.starwarsChars[this.props.appState.selected].gender}`}    </h4>
        <h4>{`Mass:       ${this.props.appState.starwarsChars[this.props.appState.selected].mass}`      }</h4>
        <h4>{`Birth Year: ${this.props.appState.starwarsChars[this.props.appState.selected].birth_year}`}</h4>
        <h4>{`Hair Color: ${this.props.appState.starwarsChars[this.props.appState.selected].hair_color}`}</h4>
        <h4>{`Eye Color:  ${this.props.appState.starwarsChars[this.props.appState.selected].eye_color}`} </h4>
        <h4>{`Skin Color: ${this.props.appState.starwarsChars[this.props.appState.selected].skin_color}`}</h4>
      </div>      
     )
  
  }

}
export default CharCard