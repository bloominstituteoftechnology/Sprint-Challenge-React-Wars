import React from 'react'
import styled from 'styled-components';

const FooterStyle = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: center;
    transition: 200ms;
    box-shadow: 0 0 2rem gray;
    background: black;
    color: white;
`

function footer () {
return (
    <FooterStyle>
        <p>Made by Kiyani &#128640;</p>
    </FooterStyle>
    
)

}


export default footer;