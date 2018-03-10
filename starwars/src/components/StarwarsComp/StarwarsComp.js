import React, { Component } from 'react';
import './StarwarsComp.css'

class StarwarsComp extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      species: [],
      toggle: true,
      
    };
  }
  
  handleClick = () => {
    this.setState( {toggle: !this.state.toggle} )
  };
  
  
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
    const hide = this.state.toggle ? {visibility: 'collapse' } : { display: 'inline-block'};
    return (
      <div className="characters borderToggle">
        <h3>{this.props.characters.name}</h3>
        <div className="myButton" onClick={this.handleClick}>{this.state.toggle ? "See more ..." : "Hide"}</div>
        <span> </span>
        <div style={hide}>
          <div>Birth date: {this.props.characters.birth_year}</div>
          <div>Gender: {this.props.characters.gender}</div>
          <div>Weight: {this.props.characters.mass}</div>
          <div>Height: {this.props.characters.height}</div>
          <div>Skin color: {this.props.characters.skin_color}</div>
          <div>Eyes: {this.props.characters.eye_color}</div>
          <div>Species: {this.state.species.name}</div>
        </div>

      </div>
    );
  }
  
}


export default StarwarsComp;