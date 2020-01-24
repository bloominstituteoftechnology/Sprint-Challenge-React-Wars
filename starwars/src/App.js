import React, {useEffect, useState} from "react";
import './App.css';
import StarWars from "./components/StarWars";
import axios from "axios"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    let [swData, setSWdata] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

      useEffect( () => {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                console.log(response);
                setSWdata(response.data.results)
            })
            .catch(error =>{
                console.log("error found", error);
            })
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {swData.map(people => (
        console.log(people)
          <StarWars
          name = {people.name}
          height = {people.height}
          birthDate = {people.birth_year}
          gender = {people.gender}
          species = {people.species}
          // // films = {people.films.length}
          />
        )
      )}
    </div>
  );
}

export default App;
