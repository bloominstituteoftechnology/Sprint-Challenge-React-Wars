import React from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import './Buttons.css';

const Pagination = (props) => {
  return (
    <div className="button-container">
      <PrevButton previousPage={props.previousPage} />
      <NextButton nextPage={props.nextPage} />
    </div>
  );
};

export default Pagination;
