import React from 'react';

function ChangePage(props) {
  return (
    console.log('change page', props.nextPage),
    (
      <div>
        <button onClick={props.gotoPrevPage}>previous page</button>
        <button onClick={props.gotoNextPage}>next page </button>
      </div>
    )
  );
}

export default ChangePage;
