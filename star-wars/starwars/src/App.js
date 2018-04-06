import React, { Component } from 'react';
import './App.css';
// import SWChars from './SWChars';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
    
      // .catch(err => {
      //   throw new Error(err);
      // });
  }
   
//  const SWChars = props => {
//     // console.log("Props", props);
//     // map over staeWarsChars return a dom elment for each name in list
//     return <div >{props.starwarsChars.map(p => <div>{p.name}:   {p.species} </div>)} </div>;
//   };

  render() {
    console.log('rendercalled'); 
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {/* <SWChars starwarsChars={name} {species} > */}
        <p> I cannot get the data to display from the Fetched Source. I have tried implementing 
          a map function as a separate component and on the main app page. 
          I tried implenting card formating and just general return and console statements for the data.
          I got everything up and running (react/yarn/boostrap/reactstrap/react-dev-tools), 
          I believe my main issues are with the general naming methods and calling required to 
          execute react components. And working in the webpage console. </p>
      </div>
    );
  }
}

export default App;
