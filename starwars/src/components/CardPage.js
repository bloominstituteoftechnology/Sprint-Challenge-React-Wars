import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"
import styled from 'styled-components';


const Box = styled.div`

    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `
export default function CardPage(){
    const [starData, setStarData] = useState([]);

    useEffect(() => {

        axios.get(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => {
        console.log(response);
        setStarData(response.data)
        
        })
        .catch(error => {
        console.log("star data didn't load", error);
        });

    }, []);

    return (
       
        <Box>

            
        {starData.map((character) => {
            return(
           <Card
            name = {character.name}
            ancestry = {character.ancestry}
           />);
           
        })} 

        </Box>

    )

}
