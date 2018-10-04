import React from "react";

const SSB = props => {
  return (
    <div className="searchbox-container">
      <input type="search" placeholder="Search" onChange={props.searchChange} />
    </div>
  );
};

export default SSB;
