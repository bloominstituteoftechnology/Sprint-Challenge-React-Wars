import React, {useState, useEffect} from "react";
import './App.css';
import axios from 'axios';
// import 'semantic-ui-css/semantic.min.css';
import styled from "styled-components";
import Cards from "./components/StarWarsCards";

const App = () => {
    const [toon, setToon] = useState();
    const [movie, setMovie] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.'



    const NameStuff = styled.div`
      font-size: 1.3rem;
      line-height: 1.2;
      color: white;
`;

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
                    console.log(response.data.results);
                    setToon(response.data.results);
                }
                // axios
                //     .get(`https://swapi.co/api/films/`)
                //     .then((response) => {
                //         for (let i = 0; i < 11; i++) {
                //             console.log(response.data.results[i]);
                //             setMovie(response.data.results);
                //         }
                //     })
            })
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <div className = "Container">
            <NameStuff>
                {(toon)?toon.map(i => (<div key = {i.name}>Name: {i.name}<br />Height: {i.height}<br /> Weight: {i.mass}<br/><br/></div>)):null}
            </NameStuff>
            {/*<div className = "MovieStuff">*/}
            {/*    {(movie)?movie.map(i=>(<p key={i.title}> {i.title}</p>)):null}*/}
            {/*</div>*/}
    </div>
    </div>
  );
};

export default App;
