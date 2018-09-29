import React, { Component } from 'react';


class Star extends Component{
  render(){
    return(
      <div className="star-container">
        <h3>{this.props.star.name} </h3>
      </div>
    );
  }
}

export default Star;