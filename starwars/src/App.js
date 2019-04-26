import React, { Component } from 'react'
import './App.css'

import FilterableTable from './components/FilterableTable'
import { map, compose, curry, reduceObj, trace } from '../src/util'

// const renderFilterableTable = curry(
//   (allData, cellData) => <FilterableTable data={allData} columns={cellData} />
// )

const renderBox = (x, i) => <div className="box" key={i*100}>{x}</div>

const renderCharacterBoard = curry(
  (data, i) => (
    <div className="board" key={i}>
      { map(renderBox, Object.values(data[0])) }
    </div>   
  )
)

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
    const renderDataInBoard = compose(
      renderCharacterBoard(this.state.allCharacterData),
      Object.keys
    )
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

          {
            (this.state.loading)
              ? <p style={this.styles.p}>...</p>
              // : <FilterableTable id="results">
              : <div>
                { map(renderDataInBoard, this.state.allCharacterData) }             
              </div>
          }
        </aside>
      </div>
    )
  }
}

export default App
