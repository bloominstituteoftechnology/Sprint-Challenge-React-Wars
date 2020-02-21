import React, { useState, useEffect } from 'react';
import Cards from "./Cards"
import axios from "axios";
import { Container, Row } from 'reactstrap';

const CardGrid = () => {
const [data, setData] = useState([]);
    
useEffect(() => {
    const fetchData = () => {
      axios.get("https://swapi.co/api/people")
        .then(response => { 
          console.log(response.data.results);
          setData(response.data.results);
        });
    }
    fetchData();
  }, []);

return(
    <Container>
        <Row>
            {data.map((el, index) => {
                return <Cards data={el} key={index}/>
            })}
        </Row>
    </Container>
)
};
export default CardGrid;