import React from 'react'
import Card from './Card.js'
import styled from 'styled-components'

const CardGroupContainer = styled.div`
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
`; 

const CardGroup = (props)=>{
    return(
        <CardGroupContainer>
            {
                props.people.map(el=>{
                    return <Card key={el.url} char={el} />
                    
                })
            }

        </CardGroupContainer>
        

        
    )
}


export default CardGroup