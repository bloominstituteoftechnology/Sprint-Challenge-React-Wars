import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
	background-color:#333333;
	border-radius:28px;
	border:1px solid #f7f7f7;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:'Lato', sans-serif; 
	font-size:24px;
	padding:16px 41px;
	text-decoration:none;

/* &hover {
	background-color:#ffffff;

.myButton:active {
	position:relative;
	top:1px; */

`

export default function Button(props) {
    return (
        <div>
            <ButtonStyle>{props.guessAgain}</ButtonStyle>
        </div>
    )
}
