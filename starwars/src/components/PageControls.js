import React from "react";

const PageControls = (props) => {
  return (
    <div className="PageControls">
      <button onClick={props.prevPage}>Previous Page</button>
      <button onClick={props.nextPage}>Next Page</button>
    </div>
  );
};

export default PageControls;
