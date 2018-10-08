import React from "react";

const PageControls = (props) => {
  return (
    <div className="PageControls">
      <button className="button buttonNext" onClick={props.prevPage}>Previous Page</button>
      <button className="button buttonPrev" onClick={props.nextPage}>Next Page</button>
    </div>
  );
};

export default PageControls;
