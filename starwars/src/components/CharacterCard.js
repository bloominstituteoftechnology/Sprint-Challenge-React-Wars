import React from 'react';
import styled from 'styled-components';


const CardBorder = styled.div`
display:flex;
flex wrap: column wrap;
`;





const CharacterCard = props => {
    
    return(
        <div className='card' key={props.key}>
            <h1 className='name'>{props.name}</h1>
            <p className='birth_year'>{props.birth_year}</p>
            <p className='gender'>{props.gender}</p>
            <p className='height'>{props.height}</p>
            <p className='mass'>{props.mass}</p>
        </div>
    )
}

export default CharacterCard;