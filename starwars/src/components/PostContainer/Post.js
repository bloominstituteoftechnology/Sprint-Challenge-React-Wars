import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, InputGroup, Input, InputGroupAddon, InputGroupText} from "reactstrap";
// import CommentSection from '../CommentSection/CommentSection';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
          <Card className="Post">
                <CardBody>
                    <Row>
                        <img className="Post-userimg" src={"https://upload.wikimedia.org/wikipedia/commons/7/7b/May_the_4th_be_with_you_%28Star_Wars_Day%29.gif"} alt=""/>
                        <CardTitle className="Post-username"> {this.props.post.name} </CardTitle>
                    </Row>
                </CardBody>
                <CardImg src={"http://www.unleashthefanboy.com/wp-content/uploads/2012/10/star-wars-banner.jpg"} alt="" />
                <CardBody>
                    <CardTitle className="Post-label">
                        Gender
                    </CardTitle>
                    <CardText className="Post-data">
                        {this.props.post.gender}
                    </CardText>
                    <InputGroup>
                        <Input placeholder="Add a comment"/>
                            <InputGroupAddon addonType="append">
                            <InputGroupText>...</InputGroupText>
                            </InputGroupAddon>
                    </InputGroup>
                </CardBody>
          </Card>
        );
      };
    }

export default Post;