import React from 'react';
import logo from '../../img/logo.jpg';
import styled from 'styled-components';
import Pagination from '../Pagination/Pagination'

const HeaderDiv = styled.div `

color: white;

`
const Logo = styled.img`
width: 30%;
`

const Header = (props) => {
    return (
        <HeaderDiv>
            <Logo src={logo} alt=""/>

            <h3>Character Lookup</h3>
            <Pagination
            page={props.page} 
            pageUp={props.pageUp}
            pageDown={props.pageDown}/>
        </HeaderDiv>
    );
}

export default Header;
