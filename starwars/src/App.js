import React, {useState, useEffect} from 'react';
import './App.css';
import InfoCards from "./components/InfoCards";
import Card from "./components/Card";
import axios from "axios";



const App = () => {

  const [people, starPeople] = useState([]);

  useEffect(() =>
    axios 
    .get("https://swapi.co/api/people/")
    .then(response => {
    console.log(response);
    const allPeople = response.data.results;
    starPeople(allPeople)
    })
    .catch(error =>
      console.log("No data returned", error)
      )
,[]);

// return (
//   <div>
//    {people.map (item => {
//        return <Card key = {item} name ={item.name}/>
//    })}

//   </div>
// )

  
  // const [hasError, setErrors] = useState(false);
  // const [planets, setPlanets] = useState({});

  // useEffect(() =>
  //   fetch("https://swapi.co/api/people/")
  //     .then(response => {
  //     .catch(() => this.setState({ hasErrors: true }))
  // );
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <InfoCards />
      <Card />
    </div>
  );
}

export default App;
