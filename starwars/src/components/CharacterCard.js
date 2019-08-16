import React from 'react';
import './characterCard.scss';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';


const Wrap = styled.div `

display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: row;
margin-bottom: 1rem;
margin-right: 1rem;
margin-left: 1rem;
padding: 1rem;




`;





function CharacterCard(props) {
console.log('props', props)





    return(

        

        <Card>

<Wrap>
            
            <p>name: {props.character.name}</p>
            <p>height: {props.character.height}</p>
            <p>mass: {props.character.mass}</p>
            <p>gender: {props.character.gender}</p>
            <p>hair color: {props.character.hair_color}</p>  

            </Wrap>         
            
        </Card>

        
    )
}




export default CharacterCard