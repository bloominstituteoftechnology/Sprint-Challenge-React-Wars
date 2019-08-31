import React from 'react';
import styled from 'styled-components';

const PersonCard = styled.div`
    height: 400px;
    width: 400px;
    background-color: whitesmoke;
    margin-top: 40px;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.48);
    transition: all .3s ease-in;

    &:hover {
        transform: scale(1.1);
    }
`

const Wrapper = styled.div`
    width: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 2%;
`

const Name = styled.h1`
    font-size: 3rem;
    font-weight: 500;
`
const InfoText = styled.p`
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 300;
`

const Person = (props) => {
    const people = props.data;
    console.log(people);
    return(
        <Wrapper>
            {
                people.map((char) => {
                    return (
                        <PersonCard>
                            <Name>{char.name}</Name>
                            <InfoText>Number of Films: {char.films.length}</InfoText>
                            <InfoText>Mass: {char.mass}</InfoText>
                            <InfoText>Gender: {char.gender}</InfoText>
                        </PersonCard>
                    )
                })
            }
        </Wrapper>
    );
}

export default Person;