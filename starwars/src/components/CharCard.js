import React from "react";

const CharCard = props => {
  return (
    <div className="char-card">
      <div className="card-background" />
      <div className="card-foreground">{props.char}</div>
    </div>
  );
};

export default CharCard;
