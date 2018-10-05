import React from 'react';
import './pagination.css';

const Pagination = props => {
  return (
    <div className="pagination-component">
     <Prev prev={props.prev} />
     <Next next={props.next} />
    </div>
 );
};

const Next = props => {
  return (
    <div>
      <button onClick={props.next}>Next {`>`}</button>
    </div>
  );
};

const Prev = props => {
  return (
    <div>
      <button onClick={props.prev}>{`<`} Prev</button>
    </div>
  );
};

export default Pagination; 