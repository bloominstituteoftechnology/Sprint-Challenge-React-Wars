import React, { Component } from 'react';
import './App.css';
import CharacterContainer from './components/CharacterContainer';

var urlArr = ["species","planets"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      starwarsChars: [],
      homeworld: ''
    };
  }

  

  componentDidMount() {
    this.getCharactersData('https://swapi.co/api/people');
  }

   //child component syntax
  getCharactersData = (URL) => {
    const self = this;
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {

        //for each character, do more data fetches
        var ctr = 0;
        data.results.forEach(character => {
          fetch(character.homeworld)
            .then(res => {return res.json(); 
          })
          .then(homeworldData => {
            console.log(homeworldData.name);
            ctr++;
            character.homeworld = homeworldData.name;
            if (ctr === data.results.length) {
              console.log("done homeworld");
              
              //** begin array loops
              //** species
              var cctr = 0;
              data.results.forEach(character => {
                var sctr = 0;
                character.speciesNames = [];
                character.species.forEach(species => {
                  fetch(species)
                    .then(res => {return res.json(); 
                  })
                  .then(speciesData => {
                    console.log(speciesData.name);
                    sctr++;
                    character.speciesNames.push(speciesData.name);
                    if (sctr === character.species.length) {
                      cctr++;
                      console.log(` ${character.name} species done`);
                      if(cctr ===  data.results.length){
                        console.log("all species done");
                        
                        //** films
                        cctr = 0;
                        data.results.forEach(character => {
                          var fctr = 0;
                          character.filmTitles = [];
                          character.films.forEach(film => {
                            fetch(film)
                              .then(res => {return res.json(); 
                            })
                            .then(filmData => {
                              console.log(filmData.title);
                              fctr++;
                              character.filmTitles.push(filmData.title);
                              if (fctr === character.films.length) {
                                cctr++;
                                console.log(` ${character.name} films done`);
                                if(cctr ===  data.results.length){
                                  console.log("all films done");
                                  
                                  //** starships
                                  cctr = 0;
                                  data.results.forEach(character => {
                                    var ssctr = 0;
                                    character.starshipNames = [];
                                    if(character.starships.length === 0){
                                      cctr++;
                                    }
                                    character.starships.forEach(starship => {
                                      fetch(starship)
                                        .then(res => {return res.json(); 
                                      })
                                      .then(starshipData => {
                                        console.log(starshipData.name);
                                        ssctr++;
                                        character.starshipNames.push(starshipData.name);
                                        if (ssctr >= character.starships.length) {
                                          cctr++;
                                          console.log("cctr: " + cctr);
                                          console.log(` ${character.name} starships done`);
                                          if(cctr ===  data.results.length){
                                            console.log("all starships done");
                                            
                                            //** vechiles
                                            cctr = 0;
                                            data.results.forEach(character => {
                                              var vctr = 0;
                                              character.vehicleNames = [];
                                              if(character.vehicles.length === 0){
                                                cctr++;
                                              }
                                              character.vehicles.forEach(vehicle => {
                                                fetch(vehicle)
                                                  .then(res => {return res.json(); 
                                                })
                                                .then(vechileData => {
                                                  console.log(vechileData.name);
                                                  vctr++;
                                                  character.vehicleNames.push(vechileData.name);
                                                  if (vctr >= character.vehicles.length) {
                                                    cctr++;
                                                    console.log("cctr: " + cctr);
                                                    console.log(`${character.name} vehicles done`);
                                                    if(cctr ===  data.results.length){
                                                      console.log("all vehicles done");
                                                      console.log("all data done");
                                                      
                                                      this.setState(
                                                        { 
                                                          "starwarsChars": data.results, 
                                                          loading: false 
                                                        }
                                                      );
                                                      
                                                    

                                                    }
                                                  }
                                                })
                                                .catch(err => {
                                                  throw new Error(err);
                                                });
                                              });
                                            });  
                                            
                                            

                                          }
                                        }
                                      })
                                      .catch(err => {
                                        throw new Error(err);
                                      });
                                    });
                                  });  
                                  

                                }
                              }
                            })
                            .catch(err => {
                              throw new Error(err);
                            });
                          });
                        });  
                        


                      }
                    }
                  })
                  .catch(err => {
                    throw new Error(err);
                  });
                });
              });   
            }
          })
          .catch(err => {
            throw new Error(err);
          });
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  /*
   this.setState(
    { 
      "starwarsChars": data.results, 
      loading: false 
    }
  );
   */

  render() {
    if(this.state.loading){
      return <p>loading</p> 
    }
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterContainer characters={this.state.starwarsChars} planets={this.state.starwarsPlanets} />
      </div>
    );
  }
}

export default App;