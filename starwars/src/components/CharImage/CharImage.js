import React, { Component } from 'react'
import './CharImage.css'

class CharImage extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (  
      <div>
        <div 
        onClick={() => this.props.onClick(this.props.starwarsCharsObj.name)} 
        className={`image ${this.props.imageName} ${(this.props.index === this.props.selected)? "selected" : null }`}>
        </div>
      </div>
    )
  }
}

export default CharImage