import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  background: white;
  background-color: #fafbfc;
  border-width: 1px 1px 0;
  border: solid #dfe2e5;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-sizing: border-box;
`;

const Header = styled.div`
  color: #586069;
  padding: 8px;
  border-bottom: 1px solid #dfe2e5;
  * {
    margin: 0;
  }
`;

const Body = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Character = props => {
  const { name, height, mass, hair_color, skin_color, eye_color } = props;
  return (
    <Card>
      <Header>
        <h3>{name}</h3>
      </Header>
      <Body>
        <li>{`Height: ${height}`}</li>
        <li>{`Mass: ${mass}`}</li>
        <li>{`hair_color: ${hair_color}`}</li>
        <li>{`skin_color: ${skin_color}`}</li>
        <li>{`eye_color: ${eye_color}`}</li>
        <li>{`Height: ${height}`}</li>
      </Body>
    </Card>
  );
};

export default Character;

Character.propTypes = {
  name: PropTypes.string,
  height: PropTypes.number,
  mass: PropTypes.number,
  hair_color: PropTypes.string,
  skin_color: PropTypes.string,
  eye_key: PropTypes.string
};
