import React from 'react';
import styled from 'styled-components';
import {PaginationItem, PaginationLink} from 'reactstrap';

export default PageItem;

const SPageLink = styled(PaginationLink)`
  color: #20B2AA;
`;

function PageItem({setCurrent, i}) {
  return (
    <PaginationItem>
      <SPageLink href="#" onClick={() => setCurrent(i)}>
        {i+1}
      </SPageLink>
    </PaginationItem>
  )
}