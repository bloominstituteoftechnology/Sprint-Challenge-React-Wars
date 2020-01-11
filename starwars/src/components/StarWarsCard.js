import React from 'react'
import {Card} from 'reactstrap';
import './StarWars.scss';
import styled from 'styled-components';

const Wrapper= styled.div`
margin-right: 30%;
margin-left: 30%;
`


export default function StarWarsCard(props) {

    

    return (
        <Wrapper>
            <Card className='card'>
            <p>Name: { props.person.name}</p>
            <p>Gender: { props.person.gender}</p>
            <p>A Feautured Film: { props.person.films[3]}</p>
            </Card>
        </Wrapper>
    )
}
