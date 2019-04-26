import React, { Component } from 'react'
import './App.css'

import { pluck, compose } from '../src/util'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      starwarsChars: [] 
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/')
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ 
          allStarwarsChars: Object.values(data.results)
        })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  styles = {
    defaultFontStyles: {
      fontFamily: 'Helvetica, sans-serif, serif'
    },

    p: {
      ...this.defaultFontStyles,
      color: 'white'
    },

    h2: {
      ...this.defaultFontStyles,
      color: 'white'
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="Header">React Wars</h1>
        </header>

        <aside>
          <header>
            <h2 style={this.styles.h2}>All The Things!</h2>
            <p style={this.styles.p}>Check the console!</p>
          </header>

          {
            (this.state.allStarwarsChars)
              ? this.state.allStarwarsChars.forEach(
                (dataField, i) => console.log(dataField)
              )
              : <p style={this.styles.p}>Loading...</p>
          }
        </aside>
      </div>
    )
  }
}

export default App
