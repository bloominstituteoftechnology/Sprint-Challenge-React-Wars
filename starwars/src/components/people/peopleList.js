import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./peopleCard.js";
import {Row, Col} from 'reactstrap';
import '../StarWars.css';


export function PeopleList (){
  const [people, setPeople]= useState([]);
  
  useEffect(()=>{
    axios
    .get(`https://swapi.co/api/people/`)
    .then(response=>{
        const person = response.data.results;
        console.log(person);
        setPeople(person);
    })
   
    .catch(err=>{
        console.log(err);
    });
  }, []);

  return(
    <Row>
       {people.map(item => { 
        return(
        <Col xs="6" sm="4" >
            <PeopleCard 
                key={item.id}
                name ={item.name}
                sex ={item.gender}
                bDay= {item.birth_year}
                height={item.height}
                mass={item.mass}
                hairColor={item.hair_color}
                skinColor={item.skin_color}
                eyeColor={item.eye_color}
            />
          </Col>
          );
        })}
      </Row>   
  );
}