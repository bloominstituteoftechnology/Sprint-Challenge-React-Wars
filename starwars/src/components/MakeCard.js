import React from 'react';
import styled from 'styled-components';

const Descriptions = styled.h4`
  padding: 25px; 
  color: white;
  background-color: black;
  width: 400px;
  height: 80px;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 8px;
`;


function MakeCard(props){
	return (
		<div>
		
        <Descriptions> Name: {props.name} </Descriptions>
		<Descriptions> Location: {props.location} </Descriptions>
		<Descriptions> Age: {props.age} </Descriptions>
		<Descriptions> Species: {props.species} </Descriptions>
        </div>
	)
}


export default MakeCard;