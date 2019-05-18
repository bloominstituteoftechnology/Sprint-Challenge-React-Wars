import React, { Component } from 'react';
import Character from './Character';

export default 
class Characters extends Component {
  render() {
    return (
      <div style = { container }>
        {this.props.characters.map(char => (
          <Character 
            key = { char.name }
            character = { char }
          />
        ))}
      </div>
    )
  }
}

const container = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}