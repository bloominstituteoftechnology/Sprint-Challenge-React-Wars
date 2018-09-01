import React from 'react';
import Display from './Display';

function List(props) {
  console.log('props', props);
  return(
    <div>
      {props.height.map(height => <Display height = {height} />)}



    </div>
  );

}

export default List;
