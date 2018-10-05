import React from 'react';

const PersonInfo = ({person}) => {
    return (
        <div className="person">
          {/* <img src={person.url} alt=""/> */}
          {person.name}
          {person.birth_year}
          {person.eye_color}
          {person.hair_color}
          {person.height}
          {person.mass}
        </div>
    );
}

export default PersonInfo;
