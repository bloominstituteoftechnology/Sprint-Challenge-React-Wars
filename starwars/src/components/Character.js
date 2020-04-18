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

const Character = props =>{
    return (
             <Card>
             <h2>{props.name}</h2>
            <CharacterImg top width="10%" src={props.img} alt='Characters'/>
            <p>{props.gender}</p>
            <p>{props.status}</p>
            <p>{props.species}</p>
        </Card>
           
    )
}

export default Character;