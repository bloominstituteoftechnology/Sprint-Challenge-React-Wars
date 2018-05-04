import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

class BaseStats extends Component {
    constructor() {
        super()
        this.state = {
            planets: []

        }
    }
    componentDidMount() {
        fetch('https://swapi.co/api/planets')
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({ planets: data.results});
          })
          .catch(err => {
            throw new Error(err);
          });
      }
render() {
    return (
        <Card>
            <CardTitle key={this.props.name}> {this.props.name} </CardTitle>
            <select>
                <option> Homeworld Link </option>
                <option key={this.props.homeworld}> {this.props.homeworld} </option>
            </select>
            <CardText key={this.props.mass}> {this.props.mass} </CardText>
            <CardText key={this.props.hair_color}> {this.props.hair_color} </CardText>
            <CardText key={this.props.gender}> {this.props.gender} </CardText>
            <CardText key={this.props.eye_color}> {this.props.eye_color} </CardText>
            <CardText key={this.props.skin_color}> {this.props.skin_color} </CardText>
            <CardText key={this.props.birth_year}> {this.props.birth_year} </CardText>
            <CardText key={this.props.height}> {this.props.height} </CardText>
        </Card>
        )
    }
}
export default BaseStats