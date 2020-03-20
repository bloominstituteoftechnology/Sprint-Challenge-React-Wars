import React from 'react';
import styled from 'styled-components';
import CharacterCard from './CharacterCard';

const BodyWrapDiv = styled.div`
    width: 75%;
    height: auto;
    margin: 0 auto;
`;
const CardDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;



const PageBody = props => {
    return (
        <BodyWrapDiv>
            <CardDiv>
                {props.data.map(p => {
                    return <CharacterCard charData={p} />
                })}
            </CardDiv>
        </BodyWrapDiv>
    )
}
export default PageBody;