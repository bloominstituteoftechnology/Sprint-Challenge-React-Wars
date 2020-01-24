import React from 'react';
import Styled from 'styled-components';
import { Card, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';


const ContentContainer = Styled.div`
max-width: 40%;
margin: 0 auto;
font-size: 1.5rem;

`;

const InfoContainer=Styled.div`
font-size: 1.5rem;
color: #FFE81F;
background-color: #000000;

`;






const SWCard = (props) => {
  return (

    <ContentContainer>
        
         <Card>
        <CardBody>
        <InfoContainer>
          <CardTitle>Name: {props.name} </CardTitle>
          <CardSubtitle>DOB: {props.born} </CardSubtitle>
          <CardSubtitle>Gender: {props.gender} </CardSubtitle>
          <CardSubtitle>Height: {props.height}cm </CardSubtitle>
          <CardSubtitle>Hair: {props.hairColor} </CardSubtitle>
          <CardSubtitle>Eyes: {props.eyeColor} </CardSubtitle>
           </InfoContainer>
        </CardBody>
        </Card>
    </ContentContainer>

  );
};

export default SWCard;