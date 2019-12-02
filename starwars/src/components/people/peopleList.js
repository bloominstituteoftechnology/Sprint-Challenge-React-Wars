import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./peopleCard.js";
import {Row, Container, Col, FormGroup, Input, Button} from 'reactstrap';
import '../StarWars.css';

function searchingFor (term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) ||!term;
  }
}

export function PeopleList (){
  const [people, setPeople]= useState([]);
  const [page, setPage]= useState("https://swapi.co/api/people/");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [term, setTerm ]= useState("");

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

 
  const SearchBox =() => {

    let searchHandler = (event=> {
      setTerm(event.target.value)
      })
      searchHandler = searchHandler.bind();
       
    return (
        <div>
          <FormGroup>
            <Input
              className="input"
              name="search"
              id="exampleSearch"
              placeholder="Search Warrier"  
              type ="text"
              onChange={searchHandler}
            />
            <Button 
            onClick={searchHandler}
            type="submit" >Search</Button>
          </FormGroup>
        </div>
    )
  };

  return(
    <Container class="container">
       <SearchBox  ></SearchBox>
        <Button onClick = {() => setPage(previous)} disabled={previous === null ? true : false}> Previous page</Button>
        <Button onClick = {() => setPage(next)}  disabled={next === null ? true : false}> Next page</Button>
      <Row>
        {people.filter(searchingFor(term)).map((item, index) => { 
            return (
                <Col s={12} s={6} md={4} l={2}
                key={index} >
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
        <Button onClick = {() => setPage(previous)} disabled={previous === null ? true : false}> Previous page</Button>
        <Button onClick = {() => setPage(next)}  disabled={next === null ? true : false}> Next page</Button>
    </Container>
  );
}