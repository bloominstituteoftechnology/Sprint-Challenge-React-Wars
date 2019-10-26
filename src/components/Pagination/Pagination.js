import React from 'react';
import styled from 'styled-components';

const Next = styled.button `
 padding: .25em;
 margin: 0 1em;
 background-color: #111;
 border: none;
 color: #F4CA22;
 font-size: 1.5em;
 
`
const Previous = styled.button `
padding: .25em;
margin: 0 1em;
background-color: #111;
border: none;
color: #F4CA22;
font-size: 1.5em;
`

const Pagination = (props) => {
    return (
        <div>
            {props.page === 1 ? "" : <Previous onClick={props.pageDown}>Prev</Previous>}
            
            <Next onClick={props.pageUp}>Next</Next>
            
            
        </div>
    );
}

export default Pagination;
