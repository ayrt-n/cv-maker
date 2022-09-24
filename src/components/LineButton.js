import React, { Component } from "react";
import '../styles/Form.css';

class LineButton extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e);
  }

  render() {
    return (
      <div className="Form-line-button" onClick={ this.handleClick } data-object-key={ this.props.objectKey }>
        <div className="plus">+</div>
        { this.props.text }
      </div>
    );
  }
}

export default LineButton;
