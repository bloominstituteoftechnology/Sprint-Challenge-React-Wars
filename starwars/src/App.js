import React from 'react'
import Cards from './components/Cards'
import Pagination from './components/Pagination'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      swChars: [],
      previousPage: "",
      nextPage: "",
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people')
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.

    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({ 
          swChars: data.results,
          previousPage: data.previous,
          nextPage: data.next
         })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination
          currentPage={this.state.currentPage}
          previousPage={this.state.previousPage}
          nextPage={this.state.nextPage}
          getCharacters={this.getCharacters}
        />
        <Cards swChars={this.state.swChars} />
      </div>
    )
  }
}

export default App
