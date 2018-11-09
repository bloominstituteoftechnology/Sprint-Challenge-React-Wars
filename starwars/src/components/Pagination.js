import React from 'react';
import './StarWars.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const StarPagination = (props) => {
    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink previous onClick={props.prevPage} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={props.setPage}>
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={props.setPage}>
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={props.setPage}>
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={props.setPage}>
                    4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={props.setPage}>
                    5
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next onClick={props.nextPage} />
            </PaginationItem>
        </Pagination>
    );
}

export default StarPagination;