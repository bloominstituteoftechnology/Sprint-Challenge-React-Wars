import React, { Component } from 'react';
import './StarWars.css'

class HomeTowns extends Component {
    constructor() {
      super();
      this.state = {
        homeTown: [],
      };
    }
  
    componentDidMount() {
      this.getCharacters('https://swapi.co/api/planets/');
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
          this.setState({ homeTown: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
    };

    render() {
        console.log(this.state.homeTown)
        return(
            <div className="hometown">
                {this.state.homeTown.map (item => {
                    return(<h1>{item.name}</h1>)
                })}
            </div>
        )
    }
}

export default HomeTowns