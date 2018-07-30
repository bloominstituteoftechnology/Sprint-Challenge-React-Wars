import React from 'react';

const Paginate = props => {
  return (
    <div className='nav-buttons'>
    <button className='prev-page' onClick={props.clicked}>Prev</button>
    <button className='next-page' onClick={props.clicked}>Next</button>
    </div>
  );
}

export default Paginate;
