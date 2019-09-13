import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CharacterCard from './Card';


const Top = styled.div `
border: 1px solid rgba(0,0,0, .1);
background:rgba(216,199,179, .4);
box-shadow: 0px 0px 10px 5px rgba(0,0,0,.1);
border-radius: 10px;
color: white;
text-shadow: 2px 2px 2px rgb(0,0,0);
width: 40%;
height: 75px;
margin: 10px auto;
margin-bottom: 25px;
`;

const CharacterGrid = () => {
const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/${people}`)
      .then(response => {
        const starPeople = response.data.results;
        console.log("List of StarWars Characters", starPeople);
        setPeople(starPeople);
      })
      .catch(error => {
        console.log("Character data was not returned", error);
      });
  });

  return (
  <div className='container'>
        <Top>
            <h1>React Wars</h1>
        </Top>
     
      { 
        people.map(item=> {
            return(
    <CharacterCard 
    key={item.id}
    name={item.name}
    height={item.height}
    mass={item.mass}
    hair_color={item.hair_color}
    skin_color={item.skin_color}
    eye_color={item.eye_color}
    birth_year={item.birth_year}
    gender={item.gender}
    films={item.films.length}
    created={item.created}
    />);
})
      }
    </div>  
  );
  }

  export default CharacterGrid;