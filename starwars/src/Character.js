import React from 'react';
import './Character.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class extends React.Component {
  render() {
    const {
      name, eye_color, hair_color, height, mass, gender, birth_year, skin_color
    } = this.props;
    return (
      <div className = "characters mt-3">
      <Card className="character-container">
        <CardTitle class="Char-name">{name}</CardTitle>
        <Entry class="Char-eye-color" label="Eyes" text={eye_color} />
        <Entry class="Char-hair-color" label="Hair" text={hair_color} />
        <Entry class="Char-height" label="Height" text={height} />
        <Entry class="Char-mass" label="Mass" text={mass} />
        <Entry class="Char-gender" label="Gender" text={gender} />
        <Entry class="Char-birth-year" label="Born" text={birth_year} />
        <Entry class="Char-skin-color" label="Skin" text={skin_color} />
      </Card>
      </div>
    );
  }
}

const Entry = (props) => {
  const {
    id, label, text
  } = props;
  return (
    <div className="Char-entry" id={id}><span>{label}:</span> {text}</div>
  );
}