import React from "react";

function StarWarsPage(props) {
  return (
    <div className="btn-wars">
      <button onClick={props.goPrevPage}>prev page</button>
      <button onClick={props.goNextPage}>next page</button>
    </div>
  );
}

export default StarWarsPage;
