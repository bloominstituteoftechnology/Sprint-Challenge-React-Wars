import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Row, Table} from "reactstrap";


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
                        <img className="Post-userimg" src={"https://i.pinimg.com/564x/13/84/c0/1384c00e983ed79ac86237b490a3389c.jpg"} alt=""/>
                        <CardTitle className="Post-username"> {this.props.post.name} </CardTitle>
                    </Row>
                </CardBody>
                <CardImg src={"http://www.unleashthefanboy.com/wp-content/uploads/2012/10/star-wars-banner.jpg"} alt="" />
                <CardBody>
                    <CardTitle className="Post-label">
                        Data
                    </CardTitle>
                    <Table>
                        <tbody>
                            <tr>
                                <th scope="row">Birth Year</th>
                                <td>{this.props.post.birth_year}</td>
                            </tr>
                            <tr>
                                <th scope="row">Created</th>
                                <td>{this.props.post.created}</td>
                            </tr>
                            <tr>
                                <th scope="row">Edited</th>
                                <td>{this.props.post.edited}</td>
                            </tr>
                            <tr>
                                <th scope="row">Eye Color</th>
                                <td>{this.props.post.eye_color}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gender</th>
                                <td>{this.props.post.gender}</td>
                            </tr>
                            <tr>
                                <th scope="row">Hair Color</th>
                                <td>{this.props.post.hair_color}</td>
                            </tr>
                            <tr>
                                <th scope="row">Height</th>
                                <td>{this.props.post.height}</td>
                            </tr>
                            <tr>
                                <th scope="row">Mass</th>
                                <td>{this.props.post.mass}</td>
                            </tr>
                            <tr>
                                <th scope="row">Skin Color</th>
                                <td>{this.props.post.skin_color}</td>
                            </tr>
                        </tbody>
                    </Table>
                </CardBody>
          </Card>
        );
      };
    }

export default Post;