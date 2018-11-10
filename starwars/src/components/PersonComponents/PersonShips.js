import React from "react";

const PersonShips = props => {
  return (
    <div className="person-ships">
      {props.ships.map(s => {
        fetch(s)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data.name);
          })
          .catch(err => {
            throw new Error(err);
          });
      })}
    </div>
  );
};

export default PersonShips;
