import React from 'react';
import './App.css';
import Character from "./components/Character";

<<<<<<< HEAD
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
                this.setState({starwarsChars: data.results });
            })
            .catch(err => {
                throw new Error(err);
            });
    };
    
    

    render() {
        return (
            <div className="App">
                <h1 className="Header">React Wars</h1>
                <Character data={this.state.starwarsChars}/>
            </div>
        );
    }
=======
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
>>>>>>> upstream/master
}

export default App;