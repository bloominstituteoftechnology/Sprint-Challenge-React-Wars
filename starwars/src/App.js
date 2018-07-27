import React, { Component } from "react";
import "./App.css";
import ListOfCharCards from "./components/ListOfCharCards";
import CharacterForm from "./components/CharacterForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      rightCounter: 0,
      leftCounter: 0
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
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
        this.setState({
          starwarsChars: data.results,
          leftCounter: data.results.length - 1
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  incrementRightButton = (event) => {
    event.preventDefault();
    console.log("rightCounter", this.state.rightCounter);
    if (this.state.rightCounter >= this.state.starwarsChars.length - 1) {
      this.setState(() => {
        return {
            rightCounter: 0,
        };
      });
    }
    else {
      this.setState(prevState => {
        return {
            rightCounter: prevState.rightCounter + 1,
        };
      });
    }
  };
  decrementLeftButton = (event) => {
    event.preventDefault();
    console.log("leftCounter", this.state.leftCounter);
    // this.setState({ count: this.state.count + 1 }); // DON'T Do THIS.
    if (this.state.leftCounter <= 0) {
      this.setState(() => {
        return {
            leftCounter: this.state.starwarsChars.length -1,
        };
      });
    }
    else {
      this.setState(prevState => {
        return {
            leftCounter: prevState.leftCounter - 1,
        };
      });
    }
  };
  // toggleChars= name => {
  //   let starwarsChars = this.state.starwarsChars.slice();
  //   starwarsChars = starwarsChars.map(char => {
  //     // if the todoData element id
  //     // equals the id of the one we click
  //     // we change to the opposite of what
  //     // it is, true to false, f to t
  //     if (char.name === name) {
  //       char.clicked = !char.clicked;
  //       return char;
  //     } else {
  //       return char;
  //     }
  //   });
  //   this.setState({ starwarsChars });
  // };

  // handleUpdateState = () => {
  //   const starwarsChars = this.state.starwarsChars.slice();

  //   starwarsChars = starwarsChars.map(char => (
  //     char.push({
  //       clicked: true,
  //     })
  //   ))

  //   this.setState({starwarsChars})
  // }

  render() {
    return (
      <div className="App">
        <CharacterForm 
          rightCounter={this.incrementRightButton}
          leftCounter={this.decrementLeftButton}
        />
        <ListOfCharCards
          starwarsArray={this.state.starwarsChars}
          toggleChars={this.handleUpdateState}
        />
      </div>
    );
  }
}

export default App;
