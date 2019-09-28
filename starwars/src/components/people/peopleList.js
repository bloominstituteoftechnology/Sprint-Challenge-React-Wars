import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./peopleCard.js";


export default function PeopleList (){
  const [people, setPeople]= useState([]);
  
  useEffect(()=>{
    axios
    .get(`http https://swapi.co/api/people/`)
    .then(response=>{
        const person = response.data.results;
        setPeople(person);
    })
    .catch(err=>{
        console.log(err);
    });
  }, []);

  return(
    {people.map(item => {
    return (
        <PeopleCard key={item.id}
        name ={item.name}
        sex ={item.gender}
        bDay= {item.birth_year}
        height={item.height}
        mass={item.mass}
        hairColor={item.hair_color}
        skinColor={item.skin_color}
        eyeColor={item.eye_color}
        />
    );
    })}
  );
}