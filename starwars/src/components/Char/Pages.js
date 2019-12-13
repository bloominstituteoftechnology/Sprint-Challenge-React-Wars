import React from 'react';
import styled from 'styled-components';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import PageItem from './PageItem';

export default Pages;

const SPageLink = styled(PaginationLink)`
  color: #20B2AA;

`;

// functional pieces below
function Pages(props) {
  const {current, setCurrent, data} = props;

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <SPageLink first href="#" onClick={()=>setCurrent(0)} />
      </PaginationItem>
      <PaginationItem>
        <SPageLink previous href="#" onClick={() => {
          if (current > 0) {
            setCurrent(current - 1);
          }
        }} />
      </PaginationItem>

      {
        data.map((d, i) => (
          <PageItem setCurrent={setCurrent} key={i} i={i} />
        ))
      }

      <PaginationItem>
        <SPageLink next href="#" onClick={() => {
          if (current < data.length - 1) {
            setCurrent(current + 1);
          }
        }} />
      </PaginationItem>
      <PaginationItem>
        <SPageLink last href="#" onClick={()=>setCurrent(data.length-1)}/>
      </PaginationItem>
    </Pagination>
  );
}