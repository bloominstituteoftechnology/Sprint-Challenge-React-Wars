import React, {useState, useEffect} from 'react';
import './App.css';
import StarWarsCard from "./components/StarWarsCard";
// https://swapi.co/api/people/1/

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsData, setStarWarsData] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    fetch('https://swapi.co/api/people/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setStarWarsData(data.results)
    });
  }, [])
    console.log(starWarsData)
  const displayData = () => {
    return starWarsData.map(data => {
      return (
        <StarWarsCard data = {data} />
      )
    })
  }
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {displayData()}
    </div>
  );
}

export default App;
