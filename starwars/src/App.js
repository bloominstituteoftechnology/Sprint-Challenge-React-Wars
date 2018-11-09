import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            starwarsChars: []
        };
    }

    componentDidMount() {
        this.populateState('starwarsChars', 'people');
        this.populateState('films', 'films');
    }

    populateState(stateField, endpoint) {
        let url = `https://swapi.co/api/${endpoint}`;
        this.fetchApi(url, stateField);
        // this.state.starwarsChars.map()
    }

    fetchApi = (URL, stateField) => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        return fetch(URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    ...this.state,
                    [stateField]: data.results
                });
            })
            .catch(err => {
                throw new Error(err);
            });
    };

    render() {
        return (
            <div className="App">
                <CardList items={this.state.starwarsChars} />
            </div>
        );
    }
}

export default App;
