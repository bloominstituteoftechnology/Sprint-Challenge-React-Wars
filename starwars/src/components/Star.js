import React, { Component } from 'react';
import"./StarWars.css"

class Star extends Component{
  render(){
    return(
      <div className="star">
        <div className="star-header">
          <h3>{this.props.star.name} </h3>
        </div>
        <div className="star-basic">
          <img src="https://imgplaceholder.com/100x100" />
          <div className="basic">
            <h2>Basic info</h2>
            <p><span>gender</span> : {this.props.star.gender}</p>
            <p><span>Eye Color</span> : {this.props.star.eye_color}</p>
            <p><span>Hair</span>:{this.props.star.hair_color}</p>
            <p><span>Height</span>:{this.props.star.height} cm</p>
            <p><span>films</span> :appear in { this.props.star.films.length}</p>
          </div>
        </div>
        <div className="card-footer">
          <p>Ships: <span> {this.props.star.starships.length}</span></p>
          <p>vehicles: <span>{this.props.star.vehicles.length}</span></p>
        </div>
      </div>
      
    )
  }
}

export default Star;