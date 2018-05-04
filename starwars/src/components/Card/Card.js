import React from 'react';
import './Card.css';
import Pic from '../Pic/Pic';
import Details from '../Details/Details';
import ToggleContent from '../ToggleContent/ToggleContent'

import {
    Jumbotron,
    Button,
    ListGroup,
    ListGroupItem } from 'reactstrap';


const Example = (props) => {
  return (
    <div>
      <Jumbotron className="custom-card col-10 col-sm-5 col-ms-4">
          <Pic />
          <h1 className="display-3">Hello, world!</h1>
          <hr className="my-2" />
          <Details />
          <hr className="my-2" />
          <ToggleContent />
          <ToggleContent />
      </Jumbotron>
    </div>
  );
};

export default Example;
