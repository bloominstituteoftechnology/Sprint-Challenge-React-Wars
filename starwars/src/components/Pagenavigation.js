import React from 'react';
import './pagenavigation.css';

const Pagenavigation = props => {
  return (
    <div className="pagenavigation-component">
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

export default Pagenavigation; 