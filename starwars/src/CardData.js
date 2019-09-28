import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import {Container, Row} from 'reactstrap';

export default function CardData () {
    
    const [person, setPerson] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const starWarsData = await axios.get('https://swapi.co/api/people/');
                console.log(starWarsData);
                setPerson(starWarsData.data.results);
            }catch(err) {
                console.log(err);
            }
        }

        fetchData();
    }, [])

    console.log(person);

    return (
        <Container>
            <Row>
            {person.map((person, index) => {
                return (
                <StarWarsCard
                    key = {index}
                    name = {person.name} 
                    gender = {person.gender}
                    hair = {person.hair_color}
                    eyes = {person.eye_color}
                    birthYear = {person.birth_year}
                    species = {person.species}
                
                />
                )
            })}
            </Row>
        </Container>
    );
}