import React from 'react'
import {Card, CardText} from 'reactstrap';
import './StarWars.scss';
import styled from 'styled-components';

const Wrapper= styled.div`
margin-right: 35%;
margin-left: 35%;
`


export default function StarWarsCard(props) {

    

    return (
        <Wrapper>
            <Card className='card'>
            <CardText className='text'>Name: { props.person.name}</CardText>
            <CardText className='text'>Gender: { props.person.gender}</CardText>
            <CardText className='text'>A Feautured Film: { props.person.films[0]}</CardText>
            </Card>
        </Wrapper>
    )
}
