import React from 'react';
import Styled from 'styled-components';

import '../header/header.css';


const Arrow = Styled.div`
        position: fixed;
        top: 15px;
        left: 20px;
        font-size: 60px;
        font-family:'Raleway';
        color: white;
        height: 60px;
        
    `;


export default function BackArrow(props){

    return(
        <Arrow id="backArrow" onClick = {props.clickHandler} >&#x2190;</Arrow>


    );
}