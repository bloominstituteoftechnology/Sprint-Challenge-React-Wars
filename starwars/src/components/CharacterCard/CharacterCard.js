import React from 'react';
import './CharacterCard.css';

const capitalize = (word) => {
  let caption = Array.from(word);
  caption[0] = caption[0].toUpperCase();
  caption = caption.join('').replace("_", " ");
  return caption;
};

const CharacterCard = (props) => {

  const sections = {
    biological: ['birth_year'],
    physical: ['height', 'mass', 'gender', 'eye_color', 'hair_color', 'skin_color']
  };

  const renderSection = (header) => {
    const capitalHeader = capitalize(header);
    return (
      <div className="Character__section">
        <div className="Character__section-header">
          {capitalHeader}
        </div>
      {sections[header].map((stat) =>  renderSectionContent(stat))}
    </div>
    );
  }

  const renderSectionContent = (stat) => {
    const caption = capitalize(stat);
    return (
      <div className="Character__section-content">
        <div className="Character__section-caption">
          {caption}
        </div>
        <div className="Character__section-stat">
          {props[stat]}
        </div>
    </div>
    );
  };

  return props ? (
    <div className="Character">
      <div className="Character__name">{props.name}</div>
      {Object.keys(sections).map((section) => renderSection(section))}
    </div>
  ) : null;
};

export default CharacterCard;