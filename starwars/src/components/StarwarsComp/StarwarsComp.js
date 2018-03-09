import React, { Component } from 'react';
import './StarwarsComp.css'

class StarwarsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: []
    };
  }
  
  componentDidMount() {
    console.log(this.props.characters.species);
    const [ spec ] = this.props.characters.species;
    console.log(spec);
    
    fetch(spec)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ species: data });
      //console.log(data.results);
    })
    .catch(err => {
      throw new Error(err);
    });
    //console.log(this.state)
  }
  
  render() {
    //console.log(this.state);
    return (
      <div className="characters">
        <div>Name: {this.props.characters.name}</div>
        <div>Birth date: {this.props.characters.birth_year}</div>
        <div>Gender: {this.props.characters.gender}</div>
        <div>Weight: {this.props.characters.mass}</div>
        <div>Height: {this.props.characters.height}</div>
        <div>Skin color: {this.props.characters.skin_color}</div>
        <div>Eyes: {this.props.characters.eye_color}</div>
        <div>Species: {this.state.species.name}</div>
      </div>
    );
  }
  
}


export default StarwarsComp;