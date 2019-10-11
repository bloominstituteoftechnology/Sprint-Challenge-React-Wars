import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";


const Body = styled.section`
display:flex;
flex-wrap: wrap;
margin: 10%;
align-items: center;
justify-content:center;

`;

const Box = styled.div`
margin: 3%;
text-align: center;
border: none;
box-shadow: 5px 10px gray;
border-radius: 10px;
`;

const Title = styled.h1`
color: black;
`;

const Text = styled(Title)`
font-size: 1rem;
`;

const CharacterCard = () => {

  const [character, setCharacters] =useState([{}]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        console.log("successful",response);
        const arr = response.data.results;
        setCharacters(arr);   
      })
      .catch(error => {
        console.log("The data was not returned", error);

      });
  }, []);


  return (
    
      <Body>
   
        {character.map ((item, index) =>{
        return <Box key = {index}>
       
     
                <Title>{item.name}</Title>
                <Text>Gender: {item.gender}</Text>
                <Text>Birth Year:{item.birth_year}</Text>
                <Text>Height:{item.height}</Text>
                <Text>Eye Color: {item.eye_color}</Text>
            
            

            </Box> 
         

        })}
     
      </Body>
   



  );
}

export default CharacterCard;

