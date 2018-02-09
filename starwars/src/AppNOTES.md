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
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.

    //MY ANALYSIS  
    /*
    ** this code fetches character data **
    ** example schema:

          State
          starwarsChars:
          Array[10]  //  its a 10-element array
          
          0:         // id '0' BEGINS element 1
          {…}
          birth_year:
          "19BBY"
          created:
          "2014-12-09T13:50:51.644000Z"
          edited:
          "2014-12-20T21:17:56.891000Z"
          eye_color:
          "blue"
          
          films:  // this is a subarray with 5 elements listing films where the character appears
            Array[5]
            0:
            "https://swapi.co/api/films/2/"
            1:
            "https://swapi.co/api/films/6/"
            2:
            "https://swapi.co/api/films/3/"
            3:
            "https://swapi.co/api/films/1/"
            4:
            "https://swapi.co/api/films/7/"
          gender:
          "male"
          hair_color:
          "blond"
          height:
          "172"
          homeworld:
          "https://swapi.co/api/planets/1/"
          mass:
          "77"
          name:
          "Luke Skywalker"
          skin_color:
          "fair"
          species:  // this is a subarray with 1 element listing the character species
          Array[1]
          0:
          "https://swapi.co/api/species/1/"
          starships:
          Array[2]
          0:
          "https://swapi.co/api/starships/12/"
          1:
          "https://swapi.co/api/starships/22/"
          url:
          "https://swapi.co/api/people/1/"
          vehicles:
          Array[2]
          0:
          "https://swapi.co/api/vehicles/14/"
          1:
          "https://swapi.co/api/vehicles/30/"
          1:
          {…}
          birth_year:
          "112BBY"
          created:
          "2014-12-10T15:10:51.357000Z"
          edited:
          "2014-12-20T21:17:50.309000Z"
          eye_color:
          "yellow"
          films:
          Array[6]
          0:
          "https://swapi.co/api/films/2/"
          1:
          "https://swapi.co/api/films/5/"
          2:
          "https://swapi.co/api/films/4/"
          3:
          "https://swapi.co/api/films/6/"
          4:
          "https://swapi.co/api/films/3/"
          5:
          "https://swapi.co/api/films/1/"
          gender:
          "n/a"
          hair_color:
          "n/a"
          height:
          "167"
          homeworld:
          "https://swapi.co/api/planets/1/"
          mass:
          "75"
          name:
          "C-3PO"
          skin_color:
          "gold"
          species:
          Array[1]
          0:
          "https://swapi.co/api/species/2/"
          starships:
          Array[0]
          Empty array
          url:
          "https://swapi.co/api/people/2/"
          vehicles:
          Array[0]
          2:
          {…}
          3:
          {…}
          4:
          {…}
          5:
          {…}
          6:
          {…}
          7:
          {…}
          8:
          {…}
          9:
          {…}
          birth_year:
          "57BBY"
          created:
          "2014-12-10T16:16:29.192000Z"
          edited:
          "2014-12-20T21:17:50.325000Z"
          eye_color:
          "blue-gray"
          films:
          Array[6]
          0:
          "https://swapi.co/api/films/2/"
          1:
          "https://swapi.co/api/films/5/"
          2:
          "https://swapi.co/api/films/4/"
          3:
          "https://swapi.co/api/films/6/"
          4:
          "https://swapi.co/api/films/3/"
          5:
          "https://swapi.co/api/films/1/"
          gender:
          "male"
          hair_color:
          "auburn, white"
          height:
          "182"
          homeworld:
          "https://swapi.co/api/planets/20/"
          mass:
          "77"
          name:
          "Obi-Wan Kenobi"
          skin_color:
          "fair"
          species:
          Array[1]
          0:
          "https://swapi.co/api/species/1/"
          starships:
          Array[5]
          0:
          "https://swapi.co/api/starships/48/"
          1:
          "https://swapi.co/api/starships/59/"
          2:
          "https://swapi.co/api/starships/64/"
          3:
          "https://swapi.co/api/starships/65/"
          4:
          "https://swapi.co/api/starships/74/"
          url:
          "https://swapi.co/api/people/10/"
          vehicles:
          Array[1]
          0:
          "https://swapi.co/api/vehicles/38/"


    */ 
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    state = starwarsData: [
      
    ]
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
      </div>
    );
  }
}

export default App;
