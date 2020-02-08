import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const Paginator = ({ handlePageChange, page }) => {
    return (      
        <Container>
            <button onClick={() => handlePageChange(1)}>Next</button>
            <button onClick={() => handlePageChange(-1)}>Prev</button>
        </Container>
    )
}

export default Paginator;
