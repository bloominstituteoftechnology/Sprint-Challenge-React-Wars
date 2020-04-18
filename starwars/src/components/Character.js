// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #99f3eb;
  color: black;
  width: 200px;
  max-height: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 2px 2px 2px grey;
`;

const CharacterImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: scale;
  flex-shrink: 2;
`;

const P = styled.p`
color:white;
text-shadow: 3px 3px 3px black;
`;

const H = styled.h2`
color:white;
text-shadow: 3px 3px 3px black;
font-size:2rem;
font-family: 'Indie Flower', cursive;
`;

const Character = props =>{
    return (
             <Card>
             <H>{props.name}</H>
            <CharacterImg top width="10%" src={props.img} alt='Characters'/>
            <P>Gender: {props.gender}</P>
            <P>Status: {props.status}</P>
            <P>Species: {props.species}</P>
        </Card>
           
    )
}

export default Character;