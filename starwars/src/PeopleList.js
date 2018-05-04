import React from 'react';
import './PeopleList.css';
import Char from './Char';

const PeopleList = props => {
    return (
      <div className="People-Wrapper">
        {props.results.map(char => {
          return <Char key={char.id} char={char} />;
        })}
      </div>
    );
  };

export default PeopleList; 