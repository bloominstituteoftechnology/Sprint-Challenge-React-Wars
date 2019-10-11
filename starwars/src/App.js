// import React, useEffect, and useState
import React, { useEffect, useState } from "react";
// import styled components
import styled from "styled-components";
// import axios
import axios from "axios";
import "./App.css";

import PersonCard from "./components/PersonCard";

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    const [people, setPeople] = useState([]);

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people`)
            .then(response => {
                const people = response.data.results;
                console.log("Star Wars Characters: ", people);
                setPeople(people);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <h1 className="Header">React Wars</h1>
            <PersonCard />
        </div>
    );
};

export default App;
