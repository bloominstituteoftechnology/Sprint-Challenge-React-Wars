import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import People from './People';
const Container= styled.div`
display:flex;
justify-content:center;
`
const CardBackground= styled.div`
border: 2px solid black;
background: white;
width: 30%;
`
export default function PeopleGrid(){
    const [Char, setChar]= useState([])
    useEffect(()=>{
        axios
        .get('https://swapi.co/api/people/3')
        .then(response =>{
            console.log(response)
            const people= response.data
            setChar(people)
        })
        .catch(error=>{
            return('Unable to fetch data', error)
        })
    },[])
    return(
        <Container>
            <CardBackground>
                <People 
                key= {Char.id}
                name= {Char.name}
                birthday= {Char.birth_year}
                gender= {Char.gender}
                height= {Char.height}
                mass= {Char.mass}
                />
            </CardBackground>
        </Container>
    )
}