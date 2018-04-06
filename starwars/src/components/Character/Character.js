import React from 'react';
import './Character.css';

export default class extends React.Component {
  render() {
    const {
      name,
      eye_color,
      hair_color,
      height,
      mass,
      gender,
      birth_year,
      skin_color
    } = this.props;
    return (
      <div className="Character">
        <div id="Character__name">{name}</div>
        <Entry id="Character__eye-color" label="Eyes" text={eye_color} />
        <Entry id="Character__hair-color" label="Hair" text={hair_color} />
        <Entry id="Character__height" label="Height" text={height} />
        <Entry id="Character__mass" label="Mass" text={mass} />
        <Entry id="Character__gender" label="Gender" text={gender} />
        <Entry id="Character__birth-year" label="Born" text={birth_year} />
        <Entry id="Character__skin-color" label="Skin" text={skin_color} />
      </div>
    );
  }
}

const Entry = (props) => {
  const {
    id,
    label,
    text
  } = props;
  return (
    <div className="Character__entry" id={id}><span>{label}:</span> {text}</div>
  );
}