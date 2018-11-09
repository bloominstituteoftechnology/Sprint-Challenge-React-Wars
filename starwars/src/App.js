import React, { Component } from 'react';
import { Fragment } from 'react';
import './App.css';
import StarWarsCards from './components/StarWarsCards';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <Fragment>
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h1>This is the beginning, the middle, and the end. GO HARD.</h1>
        <StarWarsCards starwarsChars= {this.state.starwarsChars} />
        
      </div>
      {/* <div>What's up boyyyyy!</div>  */}
      </Fragment>
    );
  }
}

export default App;

{/* <div className="App">
        <h1>Welcome! Add in a few tasks here, friendo!</h1>
        <TodoList 
        todo={this.state.todo} 
        changeTaskStatus={this.changeTaskStatus}/>
        <TodoForm 
        clearCompleted={this.clearCompleted}
        addTodo={this.addTodo}
        inputText={this.state.inputText}
        handleChange={this.handleChange}
        
        />
      </div> */}