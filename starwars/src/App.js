import React, {useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
// import 'semantic-ui-css/semantic.min.css';
import styled from "styled-components";

const App = () => {
    const [toon, setToon] = useState();
    const [movie, setMovie] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.'

    useEffect(() => {
        // axios
        //     .get('https://swapi.co/api/')
        // .then((response) => {
        //     console.log(response)
        // });
        axios
            .get('https://swapi.co/api/people/')
            .then((response) => {
                for (let i = 0; i < 11; i++) {
                    console.log(response.data.results[i]);
                    setToon(response.data.results);
                }
                axios
                    .get(`https://swapi.co/api/films/`)
                    .then((response) => {
                        for (let i = 0; i < 11; i++) {
                            console.log(response.data.results[i]);
                            setMovie(response.data.results);
                        }
                    })
            })
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
};

export default App;
