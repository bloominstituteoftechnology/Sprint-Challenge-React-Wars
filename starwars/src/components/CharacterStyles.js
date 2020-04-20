import styled from 'styled-components';
const CharacterContainer = styled.div`
    width: 100%;
    height: 100%;
    
    `;


const CharacterCard = styled.div`
    margin: 0 0 50px 500px;
    width: 350px;
    background: linear-gradient(to left, #a80077, #66ff00);
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;
    height: 85vh;
    box-shadow: 0 1px 1px 1px;
`;

const Pictures = styled.img`
    border: 1px solid black;
    border-radius: 5px;
    &:hover {
        filter: invert(100%)
    }
`;

const Text = styled.p`
    font-size: 35px;
    font-weight: bold;
    font-family: 'Reenie Beanie', cursive;
    color:  lightblue;
    padding: 0;
    margin: 0px;
    text-shadow: 2px 2px black;
    &:hover {
        color: white;
    }
    cursor: pointer;
    `;

    const NameText = styled.h2`
    font-size: 50px;
    font-weight: bold;
    font-family: 'Reenie Beanie', cursive;
    color:  lightblue;
    padding: 0;
    margin: 0 0 10px 0;
    text-shadow: 2px 2px black;
    &:hover {
        color: white;
    }
    cursor: pointer;
    `;


export { CharacterCard, Pictures, Text, CharacterContainer, NameText };