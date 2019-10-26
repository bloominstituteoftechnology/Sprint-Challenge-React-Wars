import React from 'react';
import logo from '../../img/logo.jpg';
import styled from 'styled-components';

const HeaderDiv = styled.div `

color: white;

`
const Logo = styled.img`
width: 30%;
`

const Header = () => {
    return (
        <HeaderDiv>
            <Logo src={logo} alt=""/>

            <h3>Character Lookup</h3>
        </HeaderDiv>
    );
}

export default Header;
