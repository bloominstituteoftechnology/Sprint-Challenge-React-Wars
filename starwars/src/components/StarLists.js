import React, { Component } from 'react';
import Star from "./Star";
import "./StarWars.css"


class StarLists extends Component{
  render(){
    console.log(this.props)
    return(
     <div className="main">
        {this.props.stars.map(star => {
          return <Star  key={star.created} star={star} show={this.props.show}/>
        })}
     </div>
    );
  }
}

export default StarLists;