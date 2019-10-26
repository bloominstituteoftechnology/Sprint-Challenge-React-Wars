import React from "react";
import { Pagination } from "react-bootstrap";

const Pages = ( { peoplePerPage, totalPeople, paginate } ) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <>
      <Pagination className = "cont">
      {pageNumbers.map(number => {
        return <Pagination.Item className="clicker" onClick={() => paginate(number)} key={number}>{number}</Pagination.Item>
      })}
    </Pagination>
  </>
  );
}

export default Pages; 