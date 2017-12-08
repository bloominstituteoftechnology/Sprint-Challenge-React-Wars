
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

export default class Child extends React.Component {

  componentDidMount() {
    console.log('Child did mount.');
  }

  value() {
    return ReactDOM.findDOMNode(this.refs.input).value;
  }

  render() {
    return (
      <div>
        
        <input ref="input" type="text" defaultValue={this.props.value} />
      </div>
    );
  }
}