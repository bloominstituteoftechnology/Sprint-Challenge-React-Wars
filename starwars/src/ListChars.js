import React from 'react'
import './App.css';
import ListItem from './ListItem'


const ListChars = props => {
  return (
    <div>
      {props.chars.map((char, index) => {
        return <ListItem char={char}
                                 key={index}
                                 showCurrentChar={props.showCurrentChar} />;
      })}
      <div className="btnContainer">
       <div className="return prev" onClick={props.showPrevPage}>Previous Page</div>
       <div className="return next" onClick={props.showNextPage}>Next Page</div>
      </div>
    </div>
  );
};

export default ListChars;