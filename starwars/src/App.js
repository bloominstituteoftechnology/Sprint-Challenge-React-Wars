import React, { Component } from 'react';
import './App.css';

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
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <h1> Character List</h1>
        <div>
          <section className="main-content">
            <CharacterList 
                grabResultsArray={this.state.starwarsChars} />
          </section>
        </div>
        
      </div>
    );
  }
}


class CharacterList extends React.Component {
  render() {
    return this.props.grabResultsArray.map((e) => {
      return (
        <div>
            <ul>
                <li>
                    <a> 
                    <Character key={e.created} 
                      characterName={e.name} 
                      birthdate={e.birth_year} 
                      gender={e.gender}
                      height={e.height}
                      mass={e.mass}
                      eye={e.eye_color}
                      hair={e.hair_color}
                      skin={e.skin_color}
                      
                    />
                    </a>
                </li>
            </ul>
        </div>
      )
    });
  }
}

class Character extends React.Component {
  render() {
    return (
      <div className="grow">
          <article>
            <p> Name: {this.props.characterName},  
                Born: {this.props.birthdate},
                Gender: {this.props.gender},
                Height: {this.props.height},
                Mass: {this.props.mass},
                Eye: {this.props.eye},
                Hair: {this.props.hair},
                Skin: {this.props.skin},
            </p>
            
          </article>
      </div>
    )
  }
}

export default App;
