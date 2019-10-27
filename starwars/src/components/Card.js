import React from 'react'
import styled from 'styled-components'

const CardBox = styled.div`
    width: 200px;
    height: 400px;
    padding: 10px;
    background: white;
    border-radius: 20px;
    box-shadow: 10px 10px 20px black;

`;

const CardImage = styled.img`
    width: 100%;
`; 

const CardTitle = styled.span`
    font-size: 24px;
    text-align: center;

`;




const Card = ()=>{
    return (
        <div className="card">
            <CardBox>
                <CardTitle>Luke</CardTitle>
                <CardImage alt="star wars logo image" src="\img\star-wars-logo.webp" />
            </CardBox>
        </div>
    )
}


export default Card