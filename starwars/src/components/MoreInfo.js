import React from 'react';

const MoreInfo = (props) => {
  const keys = Object.keys(props.info);
  if(keys.length === 1) {
    return (<div className="info"><h3>Name</h3>: {props.info[keys[0]]}</div>)
  }
  return (
    <div>{keys.map( (key, index) => <div className="info"><h3>{key}</h3><div className="display">{props.info[keys[index]]}</div></div> )}</div>
  );
}

export default MoreInfo;