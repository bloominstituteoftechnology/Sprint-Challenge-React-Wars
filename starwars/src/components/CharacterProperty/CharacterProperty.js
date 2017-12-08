import React from 'react';
import './CharacterProperty.css';

const CharacterProperty = (props) => {
  return (
    <div className="CharacterProperty">
      {
        Object.keys(props.data).map((key) => {

          const propertyName = key.split("_").map((part) => {
            return part.charAt(0).toUpperCase() + part.slice(1);
          }).join(" ");

          let propertyValue = props.data[key];

          if (propertyValue.indexOf("T") === 10 && propertyValue[propertyValue.length - 1] === "Z") {
            const date = new Date(propertyValue);
            let dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            propertyValue = dateString;
          }

          const propertyComponent = (
            <div className="Property">
              <div className="Property__name">{ propertyName }</div>
              <div className="Property__value">{ propertyValue }</div>
            </div>
          );

          const condition = (typeof propertyValue === "string" && 
                              !new RegExp(/http(s|):\/\//gi).test(propertyValue) &&
                              propertyName !== "Name");

          return (condition) ? propertyComponent : null;
        })
      }
    </div>
  );

}

export default CharacterProperty;