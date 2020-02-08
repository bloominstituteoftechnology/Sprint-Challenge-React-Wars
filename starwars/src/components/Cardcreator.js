import React from 'react';
import styled from "styled-components";

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const Card = styled.div`
    border: solid;
    width: 50%;
    margin: 5%;
    background-color: white;
    border-radius: 10px;
`;


const Cardcreator = props => {
    return (
        <Body>
            <Card>
                <h1>{props.data.name}</h1>
                <h3>birth year:{props.data.birth_year}</h3>
                <h3>eye color:{props.data.eye_color}</h3>
                <h3>home world:{props.data.gender}</h3>
            </Card>
        </Body>
        
    );
}

export default Cardcreator;
