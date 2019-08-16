import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"
import { Container, Grid } from "semantic-ui-react"


 function CardDisplay({ limit }) {
  const [cardInfo, setCardInfo] = useState([]);


  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/`, {
      params: {}
    }
  )
      .then(response => {
        const results = response.data.results
        console.log(results)
        setCardInfo(results)
      });
  }, []);

  return (
    <Container>
         <Grid relaxed columns={1} divided>
        <Grid.Row>
      
     {cardInfo.map(cardInfo => {
       return(
         <Card 
         key={cardInfo.url} 
         name={cardInfo.name}
         birthday = {cardInfo.birth_year}
         homeworld={cardInfo.homeworld}  
          />
     )
      } )}
    </Grid.Row>
      </Grid>
      </Container>
      )
    }
   
  export default CardDisplay