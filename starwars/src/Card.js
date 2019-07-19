import React from 'react'
import Name from './components/Name'
import ContentContainer from './components/content/ContentContainer'
import styled from 'styled-components'

const CardProps = styled.div`
    background-color: white;
    border-radius: 25px;
    max-width: 300px;
    width: 100%;
    padding: 10px;
    margin: 20px;
    opacity: 0.6;
`

const Card = ({name, height, mass, hairColor, eyeColor, skinColor, birthYear, gender, homeWorld}) => {
    return (
        <CardProps>
            <Name name={name}/>
            <ContentContainer height={height} mass={mass} hairColor={hairColor} eyeColor={eyeColor} skinColor={skinColor} birthYear={birthYear} gender={gender} homeWorld={homeWorld}/>
        </CardProps>
    )
}

export default Card