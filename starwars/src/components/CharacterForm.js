import React from "react";
import "./StarWars.css";

const CharacterForm = props => {
  return (
    <form>
      {/* <button onClick={props.handleToggleCard}>Add</button> */}
      <button>Add</button>
      <button>Clear</button>
      {/* <button onClick={props.handleClearTodos}>Clear</button> */}
    </form>
  );
};

export default CharacterForm;
