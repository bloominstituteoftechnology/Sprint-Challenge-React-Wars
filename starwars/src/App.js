import React, { Component } from "react";
import "./App.css";
import StarWarsList from "./components/starwarslist.js";
import StarWars from "./components/starwars.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextpage: "https://swapi.co/api/people"
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.getCharacters(this.state.nextpage);
  }

  // componentDidUpdate() {
  //   this.getCharacters(this.state.nextpage);
  //   console.log(`in componenet did update: with : nextpage : ${this.state.nextpage}`);
  // }
  update = () => {
    this.getCharacters(this.state.nextpage);
  };

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        //console.log(data);
        this.setState({ starwarsChars: data.results, nextpage: data.next });
        //console.log(this.state.nextpage)
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <StarWarsList characters={this.state.starwarsChars} />
        <button onClick={this.update} class="button">
          Next Page
        </button>
      </div>
    );
  }
}

export default App;
// <ToDoForm
//   // toggleItem = {this.toggleItem}
//   clearCompleted={this.clearCompleted}
//   addToDo={this.addToDo}
//   name={this.state.name}
//   handleChanges={this.handleChanges}
// />
