import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./peopleCard.js";
import {Row, Col} from 'reactstrap';
import '../StarWars.css';
import {FormGroup, Input, Button} from 'reactstrap';
import { prependOnceListener } from "cluster";




export function PeopleList (){
  const [people, setPeople]= useState([]);
  const [page, setPage]= useState("https://swapi.co/api/people/");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
 const [searchName, setSearchName] =useState("")

  useEffect(()=>{
    axios
    .get(`${page}`)
    .then(response=>{
        const person = response.data.results;

        const next1 = response.data.next;
        const  previous1 = response.data.previous;

        setPeople(person);
        setNext(next1);
        setPrevious(previous1);
    })
    .catch(err=>{
        console.log(err);
    });
  }, [page]);

  const handleSubmit = (e) => {
   
    // console.log(searchName);
    // setSearchName(searchName);
    // people.map((hero) => {
    // console.log(hero.name);
    //   return
    //  // ( hero.name === searchName ? <PeopleCard/> : "No such hero!")
    // })
  }
  const handleChange = (event) =>{
   setSearchName({setName, [event.currentTarget.name] : event.currentTarget.value})
  }

  const SearchBox =() => {
    return (
        <div>
          <FormGroup onSubmit={handleSubmit}>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Search Warrier"
              onChange={handleChange}  
              value ='Search Warrier'
            />
            <Button  type="submit" >Search</Button>
          </FormGroup>
        </div>
    )
  };

  return(
    <div>
    <Row>
    <SearchBox ></SearchBox>
    <Button onClick = {() => setPage(previous)} disabled={previous === null ? true : false}> Previous page</Button>
    <Button onClick = {() => setPage(next)}  disabled={next === null ? true : false}>Next page</Button>
      
       {people.map((item, index) => { 
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