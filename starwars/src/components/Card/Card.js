import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';


export class Card extends Component{
  constructor(props){
    super(props);
    this.state ={
      name:this.props.name,
      gender:this.props.gender,
      birthYear:this.props.birthYear,
      hairColor:this.props.hairColor
    }
  }

  render(){
    return (
    <Jumbotron>
      <p>Name: {this.state.name}</p>
      <p>Gender: {this.state.gender}</p>
      <p>Hair Color: {this.state.hairColor}</p>
      <p>Date of Birth: {this.state.birthYear}</p>
    </Jumbotron>);
  }
};

