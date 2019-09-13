import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';

const StyledDiv = styled.div`
    display: flex;
    width: 600px;
    justify-content: center;
    align-items: space-between;
`

const StyledCard = styled(Card)`
    height: 200px;
    width: 50%;
`

export default function CharacterCard() {
    const [ characters, setCharacters ] = useState([{}]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
            .then((res) => {
                const charArr = res.data.results;
                setCharacters(charArr);
            })
    }, [])

    return (
        <div>
            {characters.map(char => {
                return <StyledDiv> 
                    <StyledCard>
                        <CardTitle></CardTitle>{char.name}
                        <CardText>
                            Weight: {char.mass}kg
                        </CardText>
                        <CardText>
                            Height: {char.height}m
                        </CardText>
                    </StyledCard>
                </StyledDiv>
            })}
        </div>
    )
}