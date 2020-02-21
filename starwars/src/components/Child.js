import React from 'react';
import styled from "styled-components"

const DivCard = styled.div`
  background-color:orange;
  border:1px solid black;
  margin:2px 500px;
`;
const YellowH2 = styled.h2`
    color:yellow;
`;
const RedH3 = styled.h3`
    color:red;
`;
const PersonCard = props =>{
    return (
        <DivCard className='personCard'>
            <YellowH2 className='name'>{props.name}</YellowH2>
            <RedH3 className='gender'>{props.gender}</RedH3>
        </DivCard>
    )
}

export default PersonCard