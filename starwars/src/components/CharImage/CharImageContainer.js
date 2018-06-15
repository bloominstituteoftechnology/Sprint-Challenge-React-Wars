import React, { Component } from 'react';
import CharImage from "./CharImage";
import './CharImage.css'

class CharImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="char-image-container">
      <CharImage />
      <CharImage />
      <CharImage />
      <CharImage />
      <CharImage />
      <CharImage />
      </div>
     )
  }
}
 
export default CharImageContainer;