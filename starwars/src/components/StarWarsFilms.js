import React, { Component } from 'react';
import './StarWars.css'


class Films extends Component {
    constructor() {
      super();
      this.state = {
        Films: [],
      };
    }
  
    componentDidMount() {
      this.getCharacters('https://swapi.co/api/films/');
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
          this.setState({ Films: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
    };

    render() {
        return(
            <div className="filmbox">
                {this.state.Films.map (item => {
                    return(<div className="films">
                    <h1>{item.title}</h1>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Films
