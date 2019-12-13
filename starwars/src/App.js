import React, {useState, useEffect} from 'react';
import './App.css';
import MainCard from "./components/MainCard"
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [info, setInfo] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(
        response => {
            console.log(response.data.results);
            setInfo(response.data.results);
        })
        .catch(error => {
            console.log("The data was not returned", error)
          })
    }, []);

    return (      
      <div className="peopleInfo">
          {info.map(information => {
              return (
                  <MainCard
                      name={information.name}
                      birth_year={information.birth_year}
                      height={information.height}
                      films={information.films}
                  />
              );
          })}
      </div>
   );
  
  // return (
  //   <div className="App">
  //     <h1 className="Header">React Wars</h1>
  //     <InfoCard />
  //   </div>
  // );
}

export default App;
