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
        <Data state={this.state.starwarsChars} />
      
      </div>
    );
  }
}




const Data = props => <div className="data">


  {props.state.map(each => (
    <Names names ={each.name} />
  ))}
  {props.state.map(each =>(
    <Gender gender={each.gender} />
  ))}
  {props.state.map(each =>(
    <Birth birth={each["birth_year"]} />
  ))}
  {props.state.map(each =>(
    <Created created={each.created} />
  ))}
  {props.state.map(each =>(
    <Edited edited={each.edited} />
  ))}
  {props.state.map(each =>(
    <Eye eye={each["eye_color"]} />
  ))}
  {props.state.map(each =>(
    <Hair hair={each["hair_color"]} />
  ))}
  {props.state.map(each =>(
    <Height height={each.height} />
  ))}
  {props.state.map(each =>(
    <Homeworld homeworld={each.homeworld} />
  ))}
  {props.state.map(each =>(
    <Mass mass={each.mass} />
  ))}
  v
  {props.state.map(each =>(
    <Skin skin={each["skin_color"]} />
  ))}

</div>

const Names = props => <div className="starring" >{props.names}</div>
const Gender = props => <div className="gender" >{props.gender}</div>
const Birth = props => <div className="birth" >{props.birth}</div>
const Created = props => <div className="created" >{props.created}</div>
const Edited = props => <div className="edited" >{props.edited}</div>
const Eye = props => <div className="eye" >{props.eye}</div>
const Hair = props => <div className="hair" >{props.hair}</div>
const Height = props => <div className="height" >{props.height}</div>
const Homeworld = props => <div className="homeworld" >{props.homeworld}</div>
const Mass = props => <div className="mass" >{props.mass}</div>
const Skin = props => <div className="skin" >{props.skin}</div>



export default App;
