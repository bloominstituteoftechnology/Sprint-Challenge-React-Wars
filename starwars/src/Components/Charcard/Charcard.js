import React from 'react';
import PropTypes from "prop-types";
import './Charcard.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const Charcard = props => {

        return (
            <div className="Charcard__hidden">
                <Row>
                    <Col sm={{ size: 1, offset: 3 }}>
                    <button onClick={props.left}>&larr;</button>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{props.chars.name}</CardTitle>
                                <CardSubtitle>{props.chars.gender}</CardSubtitle>
                                <CardText>{props.chars.birth_year}</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="1">
                    <button onClick={props.right}>&rarr;</button>
                    </Col>
                </Row>
            </div>
        )
    }

    Charcard.propTypes = {
        char: PropTypes.shape({
          name: PropTypes.string.isRequired,
          height: PropTypes.number,
          mass: PropTypes.string,
          hair_color: PropTypes.string,
          films: PropTypes.arrayOf(PropTypes.string)
        })
      }

    export default Charcard;