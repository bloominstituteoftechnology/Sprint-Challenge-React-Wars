import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './StarWarsList.css';

const StarWarsList = (props) => {
  return (
    <div>
      {props.starwarsChars.map((character) => {
        return (
          <div className="Character" key="character.id">
            <div className="Name">{character.name}</div>
            <div>
              <Grid className="Grid">
                <Row className="show-grid">
                  <Col xs={6} md={4} className="col"><code>{'Gender: ' + character.gender}</code></Col>
                  <Col xs={6} md={4} className="col"><code>{'Birth Year: '+ character.birth_year}</code></Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={4} className="col"><code>{'Height: ' + character.height + ' m'}</code></Col>
                  <Col xs={6} md={4} className="col"><code>{'Mass: '+ character.mass + ' kg'}</code></Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={6} md={4} className="col"><code>{'Eye Color: ' + character.eye_color}</code></Col>
                  <Col xs={6} md={4} className="col"><code>{'Hair Color: '+ character.hair_color}</code></Col>
                </Row>
              </Grid>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default StarWarsList;