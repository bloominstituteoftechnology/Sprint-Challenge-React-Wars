import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarWarsCard from './StarWarsCard';
import {Container, Row} from 'reactstrap';


export default function CardData () {
    
    const [person, setPerson] = useState();
    const [url, setUrl] = useState('https://swapi.co/api/people/')

    useEffect(() => {
        async function fetchData() {
            try {
                const starWarsData = await axios.get(url);
                setPerson(starWarsData.data);
            }catch(err) {
                console.log(err);
            }
        }

        fetchData();
    }, [url])

    const handleNext = () => {
        if(person.next){
            setUrl(person.next)
        }
    }

    const handlePrevious = () => {
        if(person.previous){
            setUrl(person.previous)
        }
    }


    return (
        <Container>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <Row>
            {person && person.results.map((person, index) => {
                return (
                <StarWarsCard
                    key = {index}
                    name = {person.name} 
                    gender = {person.gender}
                    hair = {person.hair_color}
                    eyes = {person.eye_color}
                    birthYear = {person.birth_year}
                    species = {person.species}
                    films = {person.films}
                
                />
                )
            })}
            </Row>
        </Container>
    );
}