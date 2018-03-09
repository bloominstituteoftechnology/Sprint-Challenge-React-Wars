import React from 'react';
import { CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const CardImgs = (props) => {
  const post = props.wars;
  return (
    <div>
      <div className="outerLimits">        
        <CardBody>
          <CardTitle>{post.name}</CardTitle>
          <CardSubtitle>{post.birth_year}</CardSubtitle>
          <CardText>{post.height}</CardText>          
        </CardBody>
      </div>
    </div>
  );
};

export default CardImgs;