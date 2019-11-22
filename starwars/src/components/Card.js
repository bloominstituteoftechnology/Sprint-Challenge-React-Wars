import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
 margin: 30px;
 height: 100px;
 width: 200px;
 border: 1px solid black;
 padding: 5px;
 background-color: tomato;
`

const Card = (props) => {
    //console.log(props.name)
    return(
        <Div>
            <h2>{props.name}</h2>
        </Div>
    )
}
export default Card