import React, { Component } from 'react';
import "./StarWars.css"


class StarInfo extends Component {
  render() { 
    return ( 
      <div>
        {this.props.stars.map(star => {
          return (
          <div className="info"key={star.created} data-id={star.created}>
            <div className="basic">
              <h2>Basic info</h2>
               <p>gender : {star.gender}</p>
               <p>Eye Color : {star.eye_color}</p>
               <p>Hair:{star.hair_color}</p>
               <p>Mass:{star.mass}</p>
            </div>
          </div>
          )
        })}
      </div>
     );
  }
}
 
export default StarInfo;