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
  let subValues = [];
  const state = props.state;

  const singleCharacter = state => {
    let characters = state.slice();
    characters.map(char => {
      let object = Object.entries(char);
      if (object[0][1] === props.name) {
        object.forEach(character => {
          if (Array.isArray(character[1])) {
            character[1].forEach(item => {
              subValues.push(item);
            });
          }
          if (character[1].length === 0) {
            values.push('n/a');
          }
          keys.push(character[0]);
          values.push(character[1]);
          if (Array.isArray(character[1])) {
            let length = character[1].length;
            for (let i = 1; i < length; i++) {
              character[1].pop();
            }
          }
        });
      }
    });
  };
  singleCharacter(state);

  return (
    <div className="container">
      <div className="keys">
        {keys.map(key => {
          return <AttributesKeys colOne={key} />;
        })}
      </div>
      <div className="values">
        {values.map(value => {
          return <AttributesValues colTwo={value} />;
        })}
      </div>
    </div>
  );
};
