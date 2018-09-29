import React, { Component } from 'react';
import Star from "./Star";
import "./StarWars.css"


class StarLists extends Component{
  render(){
    return(
      <div className="star-list">
        {this.props.stars.map(star => {
          return <Star key={star.created} star={star} onClick={this.props.showInfo} />
        })}
      </div>
    );
  }
}

export default StarLists;