import React from 'react';
import Styled from 'styled-components';

import './header.css';

const HeaderDiv = Styled.div`
        width: 100%;
        height: 100px;
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        margin-bottom: 30px;
    `;

const HeaderTitle = Styled.div`
        font-family: 'Raleway';
        letter-spacing: 3px;
        color: white;
        font-size: 30px;
        height: 30px;
    `;

export default function Header(props){

    return(

        <HeaderDiv>

            <HeaderTitle>{props.headertitle}</HeaderTitle>

        </HeaderDiv>

    );
}