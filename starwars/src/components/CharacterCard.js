import React from "react";
import styled from "styled-components";

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 0 auto;

`
const Names = styled.div`
color: black;
display: flex;


align-items: center;
font-size: 40px;
font-weight: bold;

padding: 1%;




`

const Data = styled.div`
color: #ad7d37;
display: flex;
box-sizing: content-box;
width: 30%;
border: solid #7e7863;
font-size: 24px;
border-radius: 25px;
padding: 1%;
background: #2e557c;
margin-bottom: 2%;


`
export default function CharacterCard(props) {
    console.log("props", props)
return(

    <div>
        <Body>
    <Names>{props.attr.name} </Names>
    <Data>
    <p>Date of Birth: {props.attr["birth_year"]}</p>
    <p>Height: {props.attr.height}</p>
    <p>Mass:   {props.attr.mass}</p>
    <p>Eye Color: {props.attr["eye_color"]}</p>
    </Data>
    </Body>

    </div>


)

}