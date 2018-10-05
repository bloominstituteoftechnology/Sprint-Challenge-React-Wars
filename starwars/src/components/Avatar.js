import React from 'react'
import './StarWars.css'

class Avatar extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="Avatar">
        <img src={this.props.source} />
      
      </div>
    )
  }
}

export default Avatar;