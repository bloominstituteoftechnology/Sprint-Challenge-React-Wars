import React from 'react';

export const AttributesKeys = props => {
  return (
    <div>
      <li className="theKeys">{props.colOne}</li>
    </div>
  );
};

export const AttributesValues = props => {
  return (
    <div>
      <li className="theValues">{props.colTwo}</li>
    </div>
  );
};
