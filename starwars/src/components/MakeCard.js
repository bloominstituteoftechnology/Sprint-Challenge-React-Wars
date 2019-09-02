import React from 'react';
import styled from 'styled-components';

const Descriptions = styled.article`
  color: white;
  background: black;
  width: 400px;
  height: 250px;
  font-size: 1.6rem;
  text-align: center;
`;


function MakeCard(props){
	return (
		<div>
		
        <Descriptions> Name {props.name} </Descriptions>
		<Descriptions> Size: {props.mass} </Descriptions>
		<Descriptions> Height {props.height} </Descriptions>
		
        </div>
	)
}


export default MakeCard;