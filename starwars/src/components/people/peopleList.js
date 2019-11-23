import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./peopleCard.js";
import {Row, Col} from 'reactstrap';
import '../StarWars.css';
import {FormGroup, Label, Input} from 'reactstrap';




export function PeopleList (){
  const [people, setPeople]= useState([]);
  const [name, setName]= useState("");
  
  useEffect(()=>{
    axios
    .get(`https://swapi.co/api/people/${name}`)
    .then(response=>{
        const person = response.data.results;
        console.log("person",person[0].name);
        setPeople(person);
    })
   
    .catch(err=>{
        console.log(err);
    });
  }, [name]);

  const SearchBox =() => {
    return (
        <div>
          <FormGroup>
            <Label for="exampleSearch">Search</Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Search Warrier"
            />
          </FormGroup>
        </div>
    )
  };

  return(
    <div>
    <Row>
    <SearchBox></SearchBox>
       {people.map((item, index) => { 
         console.log("people",people)
        return (
        <Col col-xs="6" col-sm="4" key={index} >
            <PeopleCard 
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
      </div>
  );
}