import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
`
const PageNumber = styled.div`
    background: ${props => props.page === props.pageNumber ? 'yellow' : 'white'};
    border: 1px solid black;
    padding: 5px;
    cursor: pointer;
`


const Paginator = ({ handlePageChange, page, data }) => {
    const pageNumbers = () => {
        let pageNumbersArr = []
        for (var i = 1; i <= data.length/2; i++) {
            pageNumbersArr.push(i)
        }
        return pageNumbersArr
    }
    return (      
        <Container>

            <button onClick={() => handlePageChange('p')}>Prev</button>
            {pageNumbers().map((i) => <PageNumber onClick={() => handlePageChange(i)} key={i} pageNumber={i} page={page}>{i}</PageNumber>)}
            <button onClick={() => handlePageChange('n')}>Next</button>
        </Container>
    )
}

export default Paginator;
