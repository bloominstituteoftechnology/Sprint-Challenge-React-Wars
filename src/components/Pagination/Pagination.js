import React from 'react';
import styled from 'styled-components';

const Next = styled.button `

`
const Previous = styled.button `

`

const Pagination = (props) => {
    return (
        <div>
            <Previous onClick={props.pageDown}>Prev</Previous>
            <Next onClick={props.pageUp}>Next</Next>
            
            
        </div>
    );
}

export default Pagination;
