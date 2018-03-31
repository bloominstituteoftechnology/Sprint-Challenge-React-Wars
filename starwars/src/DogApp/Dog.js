import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  }

componentDidMount() {
    this.setState({data: this.props.data});
    console.log('doggies', this.state.data);
}

  render() {
    return (
        <div>
          <h2>Breed: {this.state.data[0]}</h2>
          <h3>Sub-Breeds: {this.state.data[1]}</h3>
          <p>Bow Wow Wow</p>
        </div>
    );
  }
}

export default Dog;

