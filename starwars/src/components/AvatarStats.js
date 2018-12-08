import React from "react";
import "./StarWars.css";

const AvatarStats = props => {
  return (
    <div className="renderTable">
      {props.data.map(item => {
        return (
          <div className="avatarStatCard">
            <h2 className="renderName">Name: {item.name}</h2>
            <div className="cardTray">
              <div class="subCard">
                <h3 className="renderHeader">Birth year:</h3>
                <p className="embolden">{item.birth_year}</p>
              </div>
              <div class="subCard">
                <h3 className="renderHeader">Gender:</h3>
                <p className="embolden">{item.gender}</p>
              </div>
              <div class="subCard">
                <h3 className="renderHeader">Eye color:</h3>
                <p>{item.eye_color}</p>
              </div>
              <div class="subCard">
                <h3 className="renderHeader">Hair color:</h3>
                <p>{item.hair_color}</p>
              </div>
              <div class="subCard">
                <h3 className="renderHeader">Height:</h3>
                <p>{item.height}</p>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvatarStats;
