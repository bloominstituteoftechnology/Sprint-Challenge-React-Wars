import React from 'react'
import styled from 'styled-components'

const CardBox = styled.div`
    width: 80%;
    height: 200px;
    padding: 10px;
    background: white;
    border-radius: 20px;
    box-shadow: 10px 10px 20px black;
    margin: 10px auto;
    overflow: hidden;
    transition: 1s;

    &:hover{
        width: 100%;
        height: 100%;
        transition: 1s;
        z-index: 1;
    }
    
    `;
    
    const CardImage = styled.div`
        width: 100%;
        height: 100px;
        border-radius: 20px;
        background: url(img/star-wars-logo.webp);
        background-size: cover;
        background-position: center;
    `; 

    const CardTitle = styled.span`
        font-size: 24px;
        text-align: center;

    `;

    const CardInfo = styled.div`

    `;


const Card = (props)=>{



    return (
        <div className="card">
            <CardBox>
                <CardTitle>{props.char.name}</CardTitle>
                <CardImage alt="star wars logo image"/>
                <CardInfo>
                    <span><b>Preferred Gender:</b></span>
                    <p>{props.char.gender}</p>
                    <span><b>Birth Year:</b></span>
                    <p>{props.char.birth_year}</p>
                    <span><b>Height:</b></span>
                    <p>{props.char.height}</p>
                    <span><b>Eye Color:</b></span>
                    <p>{props.char.eye_color}</p>
                </CardInfo>
            </CardBox>
        </div>
    )
}


export default Card