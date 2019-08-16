import React from 'react';
import styled from 'styled-components';

export default function Yolo(props) { 
  return (

        <StyledChar>
            <StyledH>{props.name} </StyledH>
            <StyledP>{props.gender}, {props.mass} lbs, {props.height} meters </StyledP>
        </StyledChar>
   
  );
}

const StyledH = styled.div`
    font-size: 16px;
    line-height: 24px;
    margin: 5px 0px;
    font-family: system-ui;
    font-weight: 600;
    padding: 10px 0px 0px 10px;
    background-color: white;
    color: #222b34;
`

const StyledP = styled.div`
    margin-bottom: 10px;
    font-family: system-ui;
    font-size: 14px;
    padding-left: 10px;
    background-color: white;
    color: #58626D;
`

const StyledChar = styled.div`
    border-bottom: 1px solid #DBDFE2;
    margin-bottom: 5px;
    width: 400px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: white; 

    
`




