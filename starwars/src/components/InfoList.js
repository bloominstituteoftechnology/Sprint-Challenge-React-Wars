import React from "react";

class InfoList extends React.Component {
  render() {
      console.log(this.props.char);
      const charList = this.props.char;
    return (
    <ul>
        <p>Birth Year: {charList.birth_year}</p>
        <p>Gender: {charList.gender}</p>
        <p>Hair Color: {charList.hair_color}</p>
        <p>Eye Color: {charList.eye_color}</p>
        <p>Height: {charList.height}</p>
        <p>Mass: {charList.mass}</p>
        <p>Skin Color: {charList.skin_color}</p>
    </ul>
    );
  }
}

export default InfoList;
