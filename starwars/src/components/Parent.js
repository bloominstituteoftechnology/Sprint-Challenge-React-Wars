import React, {useState, useEffect} from 'react';
import axios from "axios";
import PersonCard from "./Child";
import styled from "styled-components"


export default function People(){
    const [person, setPerson] = useState([])

    useEffect(() =>{
        axios.get('https://swapi.co/api/people')
        .then(response=>{
            setPerson(response.data.results)
            console.log(response.data.results);
        })
        .catch(error=>{
            console.log("NOPE", error);
        })
    }, [])

    return (
        <div className='container'>
            {person.map((index)=>(
                <PersonCard
                key={index.url}
                name={index.name}
                gender={index.gender}/>
            ))};
        </div>
    )
}