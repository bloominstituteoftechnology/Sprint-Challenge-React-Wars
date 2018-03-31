import React from 'react';
import './DataItem.css';

const DataItem = (props) => {
  console.log(props)
  return (
    <li className="Item">
      <div className="Item__title">
      {props.title}:
      </div>
      <div>
        {props.data}
      </div>
    </li>
  );
}

export default DataItem;