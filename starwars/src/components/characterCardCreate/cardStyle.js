import React from 'react'
import styled from 'styled-components'


export const CardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: auto;
width: 1000px;
`;

export const Card = styled.div`

background-color: white;
width: 300px;
height: 250px;
margin: 20px;
padding: 40px;
& > h3{
  text-align: center;
}
& > p{
  text-align: left;
}
&:hover{

}


`;
