import React, { Component } from 'react';

export default 
class Pages extends Component {
  render() {
    const { url, current } = this.props
    return (
      <div>
        <button
          onClick = { current == 1 ? null : () => { this.props.prevPage(url, current) } }
          style = { btn }
        >
          Prev
        </button>
        <button
          onClick = { current == 9 ? null : () => this.props.nextPage(url, current) }
          style = { btn }
        >
          Next
        </button>
      </div>
    )
  }
}

const btn = {
  padding: '8px 54.5px',
  background: '#b26a4a',
  fontSize: '1.3rem',
  border: '2px solid black',
  margin: '2.5px',
  cursor: 'pointer'
}