import React from 'react';
import { CardText } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardImg } from 'reactstrap';
import '../PostContainer/postcontainer.css';
// import Movies from '../Movies/movies'

const PostContainer = (props) => {
    return (
    <div className="Character-Wrapper">
      <Card>
        <CardImg width= '100%' src= 'http://static.tumblr.com/qfb4agw/Caqm70qlm/wallpapers-room_com___starwars_by_louiemantia_1920x1200_-_c__pia_-_c__pia_-_c__pia.jpg' alt="Card image cap" />
        <CardBody> Homeworld: {props.char.homeworld}
          <CardTitle>{props.char.name}</CardTitle>
          <CardSubtitle>Born: {props.char.birth_year}</CardSubtitle>
          <CardText>Eye Color: {props.char.eye_color}  Gender: {props.char.gender}  Hair Color: {props.char.hair_color}</CardText>
          {/* <Movies Movies={props.char.films}/> */}
        </CardBody>
      </Card>
    </div>
    );
    //<div key={props.char.name}>{props.char.name} </div>;
};

export default PostContainer;