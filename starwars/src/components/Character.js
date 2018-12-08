import React from 'react';


class Character extends React.Component {
  render() {
    return (
      <div className="character">
        <h1>{this.props.name}</h1>
      </div>
    
    )
  }
}

export default Character;