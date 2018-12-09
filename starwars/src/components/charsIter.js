import React from 'react';
import {TheCharacterName} from './singleCharacter.js';
import {AttributesKeys} from './listOfAttr.js';
import {AttributesValues} from './listOfAttr.js';

export const SingleCharacter = props => {
  return (
    <div className="character" onClick={props.click}>
      {props.state.map(char => {
        return <TheCharacterName key={char.name} name={char.name} />;
      })}
    </div>
  );
};

export const SingleCharacterAttr = props => {
  let keys = [];
  let values = [];
  const state = props.state;

  const singleCharacter = state => {
    let characters = state.slice();
    characters.map(char => {
      let object = Object.entries(char);
      if (object[0][1] === props.name) {
        object.forEach(character => {
          keys.push(character[0]);
          values.push(character[1]);
        });
      }
    });
  };
  singleCharacter(state);

  return (
    <div className="container">
      <div className="keys">
        {keys.map((key, index) => {
          return <AttributesKeys colOne={key} />;
        })}
      </div>
      <div className="values">
        {values.map((value, index) => {
          return <AttributesValues colTwo={value} />;
        })}
      </div>
    </div>
  );
};
