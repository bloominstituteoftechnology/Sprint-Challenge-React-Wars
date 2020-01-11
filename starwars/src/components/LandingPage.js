import React from 'react';
import Card from './Card'
import Picture from '../../src/sw-bg.jpg'
import styled from 'styled-components'

const StyledImage = styled.img`
    width: 100%;
`;

const StyledHeading = styled.h1`
    margin-bottom: 2%;
    color: #443e3e;
    font-size: 50px;
`;


const LandingPage = props => {

  return (
    <div>
        <StyledImage src={Picture}></StyledImage>
        <StyledHeading>List of Star Wars Characters</StyledHeading>
        {props.data.map((char) => {
            return <Card key={char} char={char}/>
        })}
    </div>
  );
}

export default LandingPage;

