import React, { Component } from 'react';
import React, {CharsList} from 'react';
import React, {StarwarsChars} from 'react';
import './App.css';
import StarwarsChars from './components/StarwarsChars';

const CharsList = [
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[]
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        }
        {
          birth_year: "placeholder",
          created:"placeholder",
          edited: "placeholder",
          eye_color: "placeholder",
          films: Array[],
          gender: "placeholder",
          hair_color: "placeholder",
          height: "placeholder",
          homeworld: "placeholder",
          mass: "placeholder",
          name: "placeholder",
          skin_color: "placeholder",
          species: Array[],
          starships: Array[],
          url: "placeholder",
          vehicles: Array[],
        },
      ];

class starwarsChars extends React.Component {
        constructor() {
          super();
          this.state = {
            starwarsChars:CharsList,

            birth_year: "",
            created:"",
            edited: "",
            eye_color: "",
            films: "",
            gender: "",
            hair_color: "",
            height: "",
            homeworld: "",
            mass: "",
            name: "",
            skin_color: "",
            species: "",
            starships: "",
            url: "",
            vehicles: "",


     
    };
  }

  addStarwarsChars = e =>{
    e.preventDefault();
    this.setState({
      starwarsChars: [
        ...this.state. starwarsChars,
        {
          birth_year: this.state.birth_year,
          created:this.state.created,
          edited: this.state.edited,
          eye_color: this.state.eye_color,
          films:this.state.films,
          gender: this.state.gender,
          hair_color:this.state.hair_color,
          height:this.state.height,
          homeworld: this.state.homeworld,
          mass:this.state.mass,
          name: this.state.name,
          skin_color: this.state.skin_color,
          species: this.state.species,
          starships: this.state.starships,
          url: this.state.url,
          vehicles: this.state.vehicles,
        }
      ]
    });
  }

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map(CharsList =>(
          <CharsList charsList={CharsList}/>
        ))}
      </div>

     <CharsList
        addStarwarsChars={this.addStarwarsChars}
        changeHandler={this.changeHandler}
        birth_year={this.birth_year }
        created={this.created}
        edited={this.edited}
        eye_color={this.eye_color}
        films={this.films}
        gender={this.gender}
        hair_color={this.hair_color}
        height={this.height}
        homeworld={this.homeworld}
        mass={this.mass}
        name={this.name}
        skin_color={this.skin_color}
        species={this.species}
        starships={this.starships}
        url={this.url}
        vehicles={this.vehicles}
      />
    );
  }
}

export default App;



