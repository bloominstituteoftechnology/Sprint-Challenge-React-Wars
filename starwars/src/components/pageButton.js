import React from 'react';

export const PageButton = props => {
  return (
    <div className="buttons">
      <button className="previous" onClick={props.button}>
        Previous
      </button>
      <button className="next" onClick={props.button}>
        Next
      </button>
    </div>
  );
};
