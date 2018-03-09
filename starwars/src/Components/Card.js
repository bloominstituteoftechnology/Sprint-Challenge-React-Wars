import React from 'react';
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';

const CardImgs = (props) => {
  const post = props.wars;
  return (
    <div>   
      <div>        
        <Card body inverse style={{ borderColor: '#333' }}>
          <CardTitle>Known As: {post.name}</CardTitle>
          <CardSubtitle>Birth Year: {post.birth_year}</CardSubtitle>
          <CardText>Height: {post.height}</CardText>          
        </Card>
      </div>
    </div>    
  )
}

export default CardImgs;