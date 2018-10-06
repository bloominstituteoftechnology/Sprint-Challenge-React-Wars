import React from 'react';

function PageSelector (props) {
  return (
    <div>
      <button onClick={props.changePage} > prev </button>
      <button> next </button>
    </div>
  );
}

export default PageSelector;
