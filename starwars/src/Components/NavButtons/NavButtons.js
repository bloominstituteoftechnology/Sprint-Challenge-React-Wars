import React from 'react';

const NavButtons = (props) => {




  if (props.previous == null) return (
    <button onClick={() => props.changeFunc(props.next)}>Next</button>
  );

  else if (props.next == null) return (
    <button onClick={() => props.changeFunc(props.previous)}>Previous</button>
  );

  else return (
    <div>
      <button onClick={() => props.changeFunc(props.previous)}>Previous</button>
      <button onClick={() => props.changeFunc(props.next)}>Next</button>
    </div>
  );
}


export default NavButtons;
