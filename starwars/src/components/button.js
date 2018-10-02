import React from 'react';
import './button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="button" onClick={this.props.click}>
        <p>{this.props.btnTitle}</p>
      </div>
    );
  }
}

export default Button;
