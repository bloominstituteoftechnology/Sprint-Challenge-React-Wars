// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import { CharacterCard, Pictures, Text, CharacterContainer, NameText } from './CharacterStyles';

const Character = props => {

    return (
        <CharacterContainer>
    <CharacterCard>
    
        <NameText>{props.name}</NameText>
        <Pictures src={props.pic} alt={props.name} />
        <Text>Location: {props.location.name}</Text>
        <Text>Status: {props.status}</Text>
        
    </CharacterCard>
    </CharacterContainer>
    )

}

export default Character;