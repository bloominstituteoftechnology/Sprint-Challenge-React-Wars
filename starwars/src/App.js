// Import React, useEffect, and useState
import React, { useEffect, useState } from "react";
// Import PersonCard Component
import PersonCard from "./components/PersonCard";
// Import Styled Components
import styled from "styled-components";
// Import Axios
import axios from "axios";
import "./App.css";


// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const App = () => {
 // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    const [people, setPeople] = useState([]);

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.


     // API Request w/Axios
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
            <Container>
                {people.map(person => {
                    return (
                        <PersonCard
                            key={person.name}
                            name={person.name}
                            height={person.height}
                            mass={person.mass}
                            hairColor={person.hair_color}
                            skinColor={person.skin_color}
                            eyeColor={person.eye_color}
                            birthYear={person.birth_year}
                            gender={person.gender}
                            films={person.films.length}
                            starships={person.starships.length}
                        />
                    );
                })}
            </Container>
        </div>
    );
};
export default App;