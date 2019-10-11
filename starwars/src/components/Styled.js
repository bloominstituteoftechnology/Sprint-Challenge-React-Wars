import React from "react";
import styled from 'styled-components';

export const CardHolder = styled.div`
margin: 0 auto;
width = 80%;
border: 5px solid black;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
background-image: url('https://images.unsplash.com/photo-1531328552016-28615c8ea91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
background-repeat:repeat ;
`;

export const Card = styled.div`
background: lightgray;
text-align: left;
`;