import React from 'react';
import _ from 'lodash';
import './StarWars.css';

const Card = props => {
  const relevantProps = _.pick(props, [
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'gender'
  ]);
  const data = _.transform(
    relevantProps,
    (result, value, key) => {
      result.push({ field: key, value });
    },
    []
  );
  return (
    <div className="Card">
      <h2 className="Card__title">{props.name}</h2>
      <div className="Card__bio">
        {data.map((obj, i) => (
          <div key={i} className="Card__bio-data">
            <div className="Card__bio-field">{obj.field.replace('_', ' ')}</div>
            <div className="Card__bio-value">{obj.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
