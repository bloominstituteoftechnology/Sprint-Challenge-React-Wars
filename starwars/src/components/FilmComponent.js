import React, { Component } from "react";
import { Badge } from "reactstrap";

class FilmComponent extends Component {
  constructor() {
    super();
    this.state = {
      film: {}
    };
  }
  componentDidMount() {
    fetch(this.props.film)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ film: data });
      });
  }

  render() {
    return (
      <Badge className="m-1" color="danger">
        {this.state.film.title}
      </Badge>
    );
  }
}

export default FilmComponent;
