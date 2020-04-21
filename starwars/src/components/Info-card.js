import React from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background: gray;
    color: orange;
    border: 2px solid orange;
    border-radius: 30px;
    width: 200px;
    margin-bottom: 20px;
    h3{
    color: #443e3e;
    text-shadow: 1px 1px 10px #fff;
    }
`

const infoCard = props => {

    return (       
        <Card>
            <h3>{props.soldier.name}</h3>
            <p>Gender: {props.soldier.gender}</p>
            <p>DOB: {props.soldier.birth_year}</p>
            <p>Hair color: {props.soldier.hair_color}</p>
            <p>Skin color: {props.soldier.skin_color}</p>         
        </Card>
    )
}

export default infoCard