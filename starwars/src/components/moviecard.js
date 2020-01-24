import React, { useState, useEffect } from "react";
import styled from "styled-components"


const CardDiv = styled.div`
background-color:black;
width:50%;
opacity:75%;
display:flex;
flex-direction:column;
margin:auto
`;


function Card (props){
return (
<CardDiv>
    <div>
<h1>{props.name}</h1>
<p>height: {props.height},</p>
<p>Mass: {props.mass},</p>
</div>
</CardDiv>
)}

export default Card