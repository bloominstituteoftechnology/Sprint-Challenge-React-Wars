import React from 'react';
import styled from 'styled-components';
import { Card } from './StarWars';

const DivContainer = styled.div `
margin: 0 auto;
width: 80%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`


const StarWarsDiv = (props) => {
    
console.log(props.data)
    

    return (
        <DivContainer>
            {props.data.map((item, index) => {
                            return(
                            <Card 
                                name={item.name} 
                                key={index} 
                                birth={item.birth_year} 
                                 mass={item.mass}
                                gender={item.gender}
                                height={item.height}
                              
                                />
                            )
                        })}
        </DivContainer>
            
        
    )
}
export default StarWarsDiv;