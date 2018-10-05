import React, { Component } from 'react'
import './App.css'

import NavigatorContainer from './components/NavigatorContainer'
import CardsContainer from './components/CardsContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      starwarsChars: [],
      previous: null,
      next: null
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people')
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(({ results, previous, next }) => {
        this.setState({ starwarsChars: results, previous, next })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  navigate = direction => {
    if (direction) {
      this.getCharacters(direction)
    } 
  }

  render() {
    const { starwarsChars, previous, next } = this.state
    const { navigate } = this

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <NavigatorContainer
          navigate={navigate}
          previous={previous}
          next={next}
        />
        <CardsContainer chars={starwarsChars} />
      </div>
    )
  }
}

export default App
