import React, { Component } from 'react'
import './App.css'
import Chars from '../src/components/chars'
class App extends Component {
  constructor () {
    super()
    this.state = {
      starwarsChars: []
    }
  }

  componentDidMount () {
    this.getCharacters('https://swapi.co/api/people/')
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({ starwarsChars: data.results })
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  render () {
    return (
      <div className='App'>
        <h1 className='Header'>Reactf Wars</h1>
        <div className='Chars'>
          <Chars
            starwarsChars={this.state.starwarsChars}
            src='https://i1.wp.com/www.tor.com/wp-content/uploads/2018/01/tlj-luke-skywalker4.jpg?resize=740%2C502&type=vertical&ssl=1'
          />
        </div>
      </div>
    )
  }
}

export default App
