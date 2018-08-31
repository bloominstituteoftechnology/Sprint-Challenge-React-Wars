import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import SWC from "./components/Card";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      input: ""
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
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

  handlechange = event => {
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Form>
          <FormGroup>
            <Label for="cardsearch">Search Characters</Label>
            <Input
              type="text"
              name="search"
              id="csipt"
              placeholder="Search"
              handlechange={this.handlechange}
              value={this.state.input}
            />
          </FormGroup>
        </Form>
        <div className="cardlist-container">
          {this.state.starwarsChars.map(item => (
            <SWC
              key={Math.random()}
              birth_year={item.birth_year}
              created={item.created}
              edited={item.edited}
              eye_color={item.eye_color}
              films={item.films}
              gender={item.gender}
              hair_color={item.hair_color}
              height={item.height}
              homeworld={item.homeworld}
              mass={item.mass}
              name={item.name}
              skin_color={item.skin_color}
              species={item.species}
              starships={item.starships}
              url={item.url}
              vehicles={item.vehicles}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
