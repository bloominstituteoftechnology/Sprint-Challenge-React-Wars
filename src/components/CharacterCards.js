import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 3px black solid;
    border-radius: 5px;
    margin: 20px;
    width: 45%;
    background-color: rgba(52, 52, 52, 0.375);
    .Header {
        color: blue;
        margin: 2px;
        padding: 2px;
    }
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 28px;
    }
    h3 {
        font-size: 24px;
    }
    p {
        color: lightblue;
        font-size: 20px;
    }
`

function CharacterCards(props) {
    let hair = '';
    if (props.hair === 'none' || props.hair === 'n/a') {
        hair = 'no';
    } else {
        hair = props.hair;
    }

    return (
        <StyledDiv>
            {/* data */}
            <h1 className='Name Header'>Name: {props.name}</h1>
            <h2 className='Birthday Header'>Birthday: {props.birthYear}</h2>
            <h3 className='Gender Header'>Gender: {props.gender}</h3>
            <div>
                <p className='info'>This character is {props.height} centimeters tall, and weights {props.weight} kilograms. This character also has {hair} hair and {props.eye} eyes.</p>
            </div>
        </StyledDiv>
    )
}

export default CharacterCards;