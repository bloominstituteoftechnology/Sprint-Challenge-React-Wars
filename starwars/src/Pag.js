import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PAG = (props) => {
  return (
    <Pagination size="lg" aria-label="Page navigation example" key = {props.id}>
      <PaginationItem>
        <PaginationLink first href=""/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href= {props.next}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default PAG;