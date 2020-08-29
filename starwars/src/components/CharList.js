import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Character from './Character'
import axios from 'axios'


const Contain =styled.div`

    background-color: lightgray:
    color: black;
    border-radius: 16px;
    
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin-top: -100px;
`;



export default function CharList() {

    const [persons, setPersons] = useState([]);
   

    useEffect (() =>{

        axios.get(`https://swapi.dev/api/people/`)
        // axios.get(`https://lambda-swapi.herokuapp.com/api/people/?page=2`)
        // axios.get(`https://rick-api.herokuapp.com/api/`)
            .then(res => {
                console.log(res.data.results);
                setPersons(res.data.results);
                
                
            })
            .catch(error =>{
                console.log("funny wars", error);
            });

    }, []);

    return (
       
            <Contain className ="person">
                {persons.map((per, index) => {
                    return (
                    <Character 
                        
                        key={index}
                        character_name={per.name}
                        birth_year={per.birth_year}
                        hei={(per.height)/100}
                    />
                )
                })}
            </Contain>
        
    );
    
    }
    
     