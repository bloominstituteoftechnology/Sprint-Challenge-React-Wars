import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'react';

class CharBios extends Component {
  constructor(props){
    super(props); 

    this.state = {
      expanded: false,  
    };

    this.open = this.expand.bind(this); 
    this.close = this.unexpand.bind(this); 
  }

  expand(){
    this.setState({ expanded: !this.state.expanded });
  }

  unexpand(){
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    if(!this.state.expanded){
      return <p className="btn btn-success" onClick={this.open}>Click to reveal</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-danger" onClick={this.close}>Click to hide</p>
        <ul>
          <li><h2>Gender: {this.props.CharBios.gender}</h2></li> 
          <li><h2>Height (cm): {this.props.CharBios.height}</h2></li>
            <li><h2>Birth Year: {this.props.CharBios.birth_year}</h2></li> 
            <li><h2>Homeworld: {this.props.CharBios.homeworld}</h2></li> 
        </ul>
      </div>
    )
  }
}

export default CharBios;