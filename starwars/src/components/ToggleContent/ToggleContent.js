import React, { Component } from 'react';
import Details from '../Details/Details'
import { Collapse,
    Button,
    CardBody,
    Card,
    CardText,
    ListGroup,
    ListGroupItem } from 'reactstrap';

class ToggleContent extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.display}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                <ListGroup>
                {
                    this.props.toDisplay.map(
                    (data, i) => { return (<ListGroupItem>{data}</ListGroupItem>) }
                    )
                }
                </ListGroup>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ToggleContent;
