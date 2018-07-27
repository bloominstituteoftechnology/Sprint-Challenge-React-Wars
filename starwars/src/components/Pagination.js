import React from 'react';

const Pagination = props => (
  <div>
    {props.prev == null ? null : <button onClick={props.getPrev}>prev</button>}
    {props.next == null ? null : <button onClick={props.getNext}>next</button>}
  </div>
);

export default Pagination;
