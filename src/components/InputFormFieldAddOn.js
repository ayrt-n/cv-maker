import React, { Component } from "react";
import '../styles/Form.css';

class InputFormFieldAddOn extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e);
  }

  handleClick(e) {
    this.props.handleClick(e);
  }

  render() {
    const { id, objectKey, nestedObjectKey, value, buttonText } = this.props

    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input type="text" value={ value } id={ `${id}` } data-object-key={ objectKey } data-nested-object-key={ nestedObjectKey } onChange={ this.handleInputChange } className="input"></input>
        </div>
        <div className="control">
          <button onClick={ this.handleClick } className="button">{ buttonText }</button>
        </div>
      </div>
    );
  }
}

export default InputFormFieldAddOn;
