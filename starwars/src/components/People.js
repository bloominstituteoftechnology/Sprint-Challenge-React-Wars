import React from 'react';
import styled from 'styled-components'

const Card= styled.div`
background-color:lightgrey;
margin:10px;
`

const People= props=>{
    return(
        <Card key='props.id'>
            <h2>
                Name: {props.name}
            </h2>
            <h3>
                Birth Year: {props.birthday}
            </h3>
            <h3>
                Gender: {props.gender}
            </h3>
            <h3>
                Height: {props.height}
            </h3>
            <h3>
                Mass: {props.mass}
            </h3>
            <a href="">Learn More</a>
        </Card>
    )
}
export default People