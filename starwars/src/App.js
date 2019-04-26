import React, { Component } from 'react'
import './App.css'

import FilterableTable from './components/FilterableTable'
import { map, compose, pluck, head } from '../src/util'


class App extends Component {
  constructor() {
    super()
    this.state = { 
      loading: true,
      allCharacterData: []
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
          loading: false,
          count: data.count,
          allCharacterData: Object.entries(data)
            .filter( ([k,v]) => k === 'results')
            .flatMap(([k, v]) => v)
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
            <div style={this.styles.p}>
              {
                (this.state.loading) 
                  ? <span>'Loading...'</span> 
                  : <span>Count: {this.state.count}</span>
              }
            </div>
          </header>


              {/* Logging State to the console! */}
          {
            (this.state.loading)
              ? <p style={this.styles.p}>...</p>
              // : <FilterableTable id="results">
              : <div>
              {
                this.state.allCharacterData
                  .map(({name, mass}, i) => ( 
                    <div className="board" key={i}>
                      <h1>Name: {name}</h1>
                      <h1>Mass: {mass}</h1>
                    </div>   
                  ))               
                  }
              </div>
          }
        </aside>
      </div>
    )
  }
}

export default App
