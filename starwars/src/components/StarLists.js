import React, { Component } from 'react';
import Star from "./Star";

class StarLists extends Component{
  render(){
    console.log(this.props.stars)
    return(
      <div>
        {this.props.stars.map(star => {
          return <Star key={star.created} star={star} />;
        })}
      </div>
    );
  }
}

export default StarLists