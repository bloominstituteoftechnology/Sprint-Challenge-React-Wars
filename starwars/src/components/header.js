import React from 'react'
import styled from 'styled-components'


const HeaderStyle = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: white;
    background: black;
    box-shadow: 0 0 5rem gray;
    text-transform: uppercase;
`

function header () {
return (
    <HeaderStyle>
        <p>Home</p>
        <p>About</p>
        <p>Characters</p>
        <p>Community</p>
    </HeaderStyle>
)

}

export default header;