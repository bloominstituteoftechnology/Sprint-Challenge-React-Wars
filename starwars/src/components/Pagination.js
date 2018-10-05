import React from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Pagination = (props) => {
  return (
    <div className="buttons">
      <PrevButton previousPage={props.previousPage} />
      <NextButton nextPage={props.nextPage} />
    </div>
  );
};

export default Pagination;
