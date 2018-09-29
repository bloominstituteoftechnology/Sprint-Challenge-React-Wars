import React, { Component } from 'react';
import"./StarWars.css"

class Star extends Component{
  render(){
    return(
      <div className="star" data-id={this.props.star.created}>
        <h3>{this.props.star.name} </h3>
      </div>
    );
  }
}

export default Star;