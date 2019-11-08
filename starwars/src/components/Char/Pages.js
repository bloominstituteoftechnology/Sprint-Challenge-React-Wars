import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default Pages;

// functional pieces below
function Pages(props) {
  const {current, setCurrent, data} = props;

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first href="#" onClick={()=>setCurrent(0)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" onClick={() => {
          if (current > 0) {
            setCurrent(current - 1);
          }
        }} />
      </PaginationItem>
      {
        data.map((d, i) => (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => setCurrent(i)}>
              {i+1}
            </PaginationLink>
          </PaginationItem>
        ))
      }

      <PaginationItem>
        <PaginationLink next href="#" onClick={() => {
          if (current < data.length - 1) {
            setCurrent(current + 1);
          }
        }} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" onClick={()=>setCurrent(data.length-1)}/>
      </PaginationItem>
    </Pagination>
  );
}

// const previousPg = () => {
//   if (current > 0) {
//     setCurrent(current-1);
//   }
// }

// const nextPg = () => {
//   if (current < data.length - 1) {
//     setCurrent(current+1);
//   }
// }