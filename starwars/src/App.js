import React, {Component} from 'react';
import './App.css';
import CharacterNameButton from './components/CharacterNameButton';

class App extends Component {
    constructor() {
        super();
        this.state = {
            starwarsChars: []
            //this.keys = Object.keys(starwarsChars[0]);
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
                this.setState({starwarsChars: data.results});
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    // tester = () => {
    //     console.log('testing')
    // };

    render() {
        return (
            <div className="App">
                <h1 className="Header">React Wars</h1>
                <CharacterNameButton data={this.state.starwarsChars} onClick={this.tester}/>
            </div>
        );
    }
}

export default App;
