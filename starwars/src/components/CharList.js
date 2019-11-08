import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Character from './Character'
import axios from 'axios'


// const MainCont = styled.div`

//     display: flex;
//     justify-content: center;

// `;

const Contain =styled.div`

    background-color: lightgray:
    color: black;
    border-radius: 16px;

`;



export default function CharList() {

    const [persons, setPersons] = useState([]);
   

    useEffect (() =>{

        axios.get(`https://lambda-swapi.herokuapp.com/api/people/?page=2`)
            .then(response => {
                console.log(response.data.results);
                setPersons(response.data.results);
                
                
            })
            .catch(error =>{
                console.log("Starwars do not exist yet or never existed", error);
            });

    }, []);

    return (
       
            <Contain className ="person">
                {persons.map(per => {
                    return (
                    <Character 
                        
                        key={per}
                        character_name={per.name}
                        birth_year={per.birth_year}
                        hei={(per.height)/100}
                    />
                )
                })}
            </Contain>
        
    );
    
    }
    
     