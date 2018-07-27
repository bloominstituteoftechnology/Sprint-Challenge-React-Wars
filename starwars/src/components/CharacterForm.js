import React from "react";
import "./StarWars.css";

const CharacterForm = props => {
  return (
    <form>
      <input
        // onChange={props.handleTodoChange}
        // type="text"
        // name="todo"
        // value={props.value}
        // placeholder="...todo"
        // onKeyUp={props.handleInputEnter}
      />
      <button>Add Todo</button>
      <button>Clear</button>
      {/* <button onClick={props.handleClearTodos}>Clear</button> */}
    </form>
  );
};

export default CharacterForm;
