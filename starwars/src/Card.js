import React, { Component } from 'react';


class Button extends Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}


class CardHeader extends Component {
  render() {
    const { image, category } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}


class CardBody extends Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">{this.props.index.created}</p>
        
        <h2>{this.props.index.name}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}


class Card extends Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.index.name}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}

export default {Card}