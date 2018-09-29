import React, {Component} from 'react';
import './App.css';
import {FlexColumn} from "./components/Elements/Flex";
import Character from './components/Character/Character.js'

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

    fetchProperties = async characters => {
        console.log("Loading...");
        return new Promise(async (res, rej) => {
            for (let ind in characters) {

                let films = [], starships = [], vehicles = [];
                for (let film of characters[ind].films) {
                    await fetch(film).then(res => res.json()).then(data => films.push(data));
                }

                for (let starship of characters[ind].starships) {
                    await fetch(starship).then(res => res.json()).then(data => starships.push(data));
                }

                for (let vehicle of characters[ind].vehicles) {
                    await fetch(vehicle).then(res => res.json()).then(data => vehicles.push(data));
                }

                characters[ind].films = films;
                characters[ind].starships = starships;
                characters[ind].vehicles = vehicles;
                characters[ind].homeworld = await fetch(characters[ind].homeworld).then(res => res.json()).then(data => data);

            }

            res(characters);
        })
    };

    getCharacters = URL => {
        // feel free to research what this code is doing.
        // At a high level we are calling an API to fetch some starwars data from the open web.
        // We then take that data and resolve it our state.
        let characters = window.localStorage.getItem('characters');
        if (characters) {
            console.log(JSON.parse(characters));
            this.setState({starwarsChars: JSON.parse(characters)})
        } else {
            fetch(URL)
                .then(res => {
                    return res.json();
                })
                .then(async data => {
                    const res = await this.fetchProperties(data.results);
                    console.log(res);
                    window.localStorage.setItem('characters', JSON.stringify(res));
                    this.setState({starwarsChars: res});
                })
                .catch(err => {
                    throw new Error(err);
                });
        }
    };

    render() {
        const {starwarsChars} = this.state;

        return (
            <div className="App">
                <h1 className="Header">React Wars</h1>

                <FlexColumn alignCenter justifyCenter>
                    {!starwarsChars.length ? <h2>Loading...</h2> : starwarsChars.map(char => <Character key={char.name}
                                                                                                        character={char}/>)}
                </FlexColumn>
            </div>
        );
    }
}

export default App;
