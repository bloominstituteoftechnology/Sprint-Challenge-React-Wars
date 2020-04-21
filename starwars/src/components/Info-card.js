import React from "react"
import styled from "styled-components"

const Card = styled.div`
    display: flex;
    background: white;
    border: 2px solid orange;
    border-radius: 30px;
    width: 200px;
    margin-bottom: 20px;
`

const infoCard = props => {

    return (       
        <Card>
            <div>
                <h3>{props.soldier.name}</h3>
                    <p>Gender: {props.soldier.gender}</p>
                    <p>DOB: {props.soldier.birth_year}</p>
                    <p>Hair color: {props.soldier.hair_color}</p>
                    <p>Skin color: {props.soldier.skin_color}</p> 
            </div>           
        </Card>
    )
}

export default infoCard