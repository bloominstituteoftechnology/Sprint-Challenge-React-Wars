import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from "styled-components";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';

// const Page = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const Whole = styled.div`
//   background-color: #0C154A;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Pod = styled.div`
//   display: flex;
//   justify-content: center;
//   background-color: #0C154A;
// `;

// const Top = styled.div`
//   color: #D9D9D9;
//   height: 10vh;
//   width: 100%;
//   background-color: #0C154A;
//   margin: 0 0 2% 0;
// `;

// const Bottom = styled.div`
//   color: #D9D9D9;
//   width: 100%;
//   background-color: #0C154A;

// `;


export default function TheForce() {
  const [pod, setPod] = useState([]);
  

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/starships/`)
      .then(response => {
        console.log(response.data);
        setPod(response.data);
        // if (!pod) return <h3>Loading...</h3>;
        
      })
      .catch(error => {
        console.log("Sorry no star wars", error);
      });
  }, []);


  return (
    <div>
      <Page>
        <Card>
          <Whole>
            <Top>
              <CardBody>            
                <CardTitle>The Force</CardTitle>
                <CardSubtitle>{pod.name}</CardSubtitle>
              </CardBody>
            </Top>
            <Pod>
              <Col xs="5" md="5" xl="5">
                <img width="100%" src={pod.url} alt='Profile' />
              </Col>
            </Pod>
            <Bottom>
              <CardBody>
                <CardText>{pod.homeworld}</CardText>
                <CardText>{pod.explanation}</CardText>
              </CardBody>
            </Bottom>
          </Whole>
        </Card>
      </Page>
    </div>
  );
};